import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['aos', 'framer-motion'],
          icons: ['react-icons'],
        }
      }
    },
    // Optimizar imágenes y assets
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
  },
  // Optimizaciones adicionales
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
