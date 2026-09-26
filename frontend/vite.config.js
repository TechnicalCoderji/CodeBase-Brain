import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/analyze': 'http://localhost:3001',
      '/ask': 'http://localhost:3001',
      '/onboard': 'http://localhost:3001',
      '/generate-doc': 'http://localhost:3001',
    },
  },
});
