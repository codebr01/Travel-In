// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite que o servidor aceite conexões externas (necessário para Docker)
    port: 5173, // Porta padrão do Vite em desenvolvimento
    watch: {
      usePolling: true, // Essencial para o hot reload dentro do Docker
    },
  },
  build: {
    outDir: 'dist', // Garante que o build será salvo na pasta padrão dist
  },
});
