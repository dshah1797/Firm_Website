// Leave VITE_API_URL empty when the site and API share one domain (npm start).
// Set it to the API's address if they are hosted separately, e.g. https://api.yourdomain.com
export const API = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
