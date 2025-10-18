import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: isDev
    ? {
        https:
          fs.existsSync('./localhost-key.pem') && fs.existsSync('./localhost.pem')
            ? {
                key: fs.readFileSync('./localhost-key.pem'),
                cert: fs.readFileSync('./localhost.pem'),
              }
            : false, // fallback to HTTP if .pem files are missing
        port: 5173,
      }
    : undefined, // no server config in production
});
