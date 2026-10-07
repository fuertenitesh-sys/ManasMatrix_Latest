import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminApiFetch from '../../utils/adminApi';
import './Admin.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await adminApiFetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      onLoginSuccess(data);
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="admin-login">
      <form className="admin-login__card" onSubmit={handleSubmit}>
        <img src="/logo_brain_icon.webp" alt="" className="admin-login__logo" />
        <p className="admin-login__eyebrow">MANAS MATRIX</p>
        <h1>Admin Login</h1>
        <p className="admin-login__description">Sign in to manage bookings and contact enquiries.</p>
        {error && <div className="admin-alert" role="alert">{error}</div>}
        
          <div className="admin-login__field">
            <label htmlFor="admin-username">Username</label>
            <input 
              id="admin-username"
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="admin-login__field">
            <label htmlFor="admin-password">Password</label>
            <input 
              id="admin-password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={isLoading}
            className="admin-login__submit"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
      </form>
    </main>
  );
};

export default AdminLogin;
