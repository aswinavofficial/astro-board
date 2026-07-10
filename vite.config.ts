import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/swiggy-buddy/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/astronomy-engine')) return 'astro';
          if (/[\\/]node_modules[\\/](react|react-dom|react-router|zustand|luxon)[\\/]/.test(id)) return 'vendor';
        },
      },
    },
  },
  test: { environment: 'node' },
}));
