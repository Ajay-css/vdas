import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }),
  ],
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'motion'
            if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons'
            if (
              id.includes('react-router') ||
              id.includes('/react-dom/') ||
              id.includes('/react/')
            ) {
              return 'react'
            }
          }
        },
      },
    },
  },
})
