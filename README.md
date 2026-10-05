# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Website-content update (DOCX alignment)

This version adds the main pages and legal/navigation items specified in `Manas_Matrix_Website_Content_Final.docx`:

- `/programs/family-counseling`
- `/programs/employee-progress-report`
- `/privacy-policy`
- `/terms-of-service`
- Updated HR Matrix navigation and employee-progress link
- Updated Brain Mapping report comparison
- Contact consent checkbox and "What Happens Next?"
- Updated footer legal links and service links
- Floating WhatsApp button on every page

Optional frontend contact settings can be supplied through `.env` using `.env.example`:

- `VITE_BUSINESS_EMAIL`
- `VITE_WORKING_HOURS`

## Contact enquiries and MongoDB Atlas

Contact Us submissions are stored in MongoDB and can be viewed after admin login at `/admin/bookings`. Configure the backend by copying `server/.env.example` to `server/.env`, then set `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, and `JWT_SECRET`. Use the Atlas connection string provided for the cluster; replace the password placeholder and URL-encode special characters in the password. Do not commit `server/.env`.

The admin requests API accepts either the admin login cookie or an `x-api-key` header. To use an API key, set `ADMIN_API_KEY` in `server/.env` to a random secret at least 32 characters long, then restart the backend. Generate one with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` and keep it private. In Postman, add a header with key `x-api-key` and the configured secret as its value; never put the key in the URL or frontend. Use `GET /api/admin/requests` for all requests, or add `?source=booking` for bookings only and `?source=contact` for Contact Us enquiries only. The JSON response includes a `summary` with total, booking, and contact lead counts plus a `data` array of the requested records. Counts cover all leads even when `source` filters the returned records. An invalid source returns HTTP 400.

If Node.js cannot resolve the Atlas SRV record with the system DNS resolver, the server retries using `MONGODB_DNS_SERVERS` (comma-separated). If unset, it uses Cloudflare and Google DNS (`1.1.1.1,8.8.8.8`); set the variable in `server/.env` to use different resolvers, or leave it empty to disable the fallback.

Do not publish the Privacy Policy or Terms of Service as final legal advice without appropriate review. Confirm all remaining business-specific placeholders (email, working hours, report timing, age range, program durations, review interval, founder credentials, etc.) before launch.
