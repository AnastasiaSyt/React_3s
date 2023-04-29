import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from "vite-plugin-istanbul";

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
  }),
],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes('react')) {
        //     return 'react';
        //   }
        //   if (id.includes('node_modules')) {
        //     return 'vendor';
        //   }
        // }
      },
    },
  },
});
