import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

// HTTPS config only for local development
const httpsConfig = isDev
  ? {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    }
  : undefined;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: isDev
    ? {
        https: httpsConfig,
        port: 5173,
      }
    : undefined,
});
