import { spawn } from 'node:child_process';
import { request } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const backendPort = Number(process.env.PORT || 5000);
const managedProcesses = [];
let isShuttingDown = false;

const checkBackend = () => new Promise((resolve, reject) => {
  const apiRequest = request({
    host: '127.0.0.1',
    port: backendPort,
    path: '/api/auth/me',
    method: 'GET',
    timeout: 2000,
  }, (response) => {
    response.resume();
    if (response.statusCode === 200 || response.statusCode === 401) {
      resolve(true);
    } else {
      reject(new Error(`Port ${backendPort} is occupied, but its API health check returned HTTP ${response.statusCode}.`));
    }
  });

  apiRequest.on('timeout', () => apiRequest.destroy(new Error('Backend health check timed out.')));
  apiRequest.on('error', (error) => {
    if (error.code === 'ECONNREFUSED') {
      resolve(false);
    } else {
      reject(error);
    }
  });
  apiRequest.end();
});

const stopProcesses = (exitCode) => {
  if (isShuttingDown) return;
  isShuttingDown = true;

  for (const child of managedProcesses) {
    if (child.exitCode === null && child.signalCode === null) {
      child.kill();
    }
  }

  process.exitCode = exitCode;
};

const startProcess = (name, command, args, cwd) => {
  const child = spawn(command, args, { cwd, stdio: 'inherit' });
  managedProcesses.push(child);

  child.on('error', (error) => {
    console.error(`Unable to start ${name}:`, error);
    stopProcesses(1);
  });

  child.on('exit', (code, signal) => {
    if (isShuttingDown) return;
    if (signal) {
      console.error(`${name} stopped after signal ${signal}.`);
    } else if (code !== 0) {
      console.error(`${name} exited with code ${code}.`);
    }
    stopProcesses(code === 0 ? 0 : 1);
  });

  return child;
};

process.on('SIGINT', () => stopProcesses(0));
process.on('SIGTERM', () => stopProcesses(0));

try {
  if (await checkBackend()) {
    console.log(`Backend API is already responding on port ${backendPort}; reusing it.`);
  } else {
    console.log(`Starting backend API on port ${backendPort}...`);
    startProcess('Backend API', process.execPath, ['server.js'], path.join(projectRoot, 'server'));
  }

  startProcess('Vite', process.execPath, [
    path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js'),
    ...process.argv.slice(2),
  ], projectRoot);
} catch (error) {
  console.error('Unable to prepare the development servers:', error);
  stopProcesses(1);
}
