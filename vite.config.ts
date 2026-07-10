import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig(({ command }) => ({ base: command === 'build' ? '/swiggy-buddy/' : '/', plugins: [react(), tailwindcss()], build: { rollupOptions: { output: { manualChunks: { astro: ['astronomy-engine'], vendor: ['react','react-dom','react-router','zustand','luxon'] } } } }, test: { environment: 'node' } }));
