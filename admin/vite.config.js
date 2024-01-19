import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/subpath/' : '/',
  base: '/admin',
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['react-router-dom'],
  //   },
  // },
  // server: {
  //   // proxy: {
  //   //  // Your server-side routes
  //   //   // '/api': 'http://localhost:3000',
  //   // },
  //   // Enable historyApiFallback to ensure client-side routing works
  //   historyApiFallback: true,
  // },
})
