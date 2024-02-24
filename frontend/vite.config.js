import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  // for implementing absolute for importing file
  resolve: {
    alias: {
      src: "/src"
    }
  }
  // proxy:{
  //   '/api': {
  //     target: 'http://jsonplaceholder.typicode.com',
  //     changeOrigin: true,
  //     rewrite: (path) => path.replace(/^\/api/, ''),
  //   },
  // }
});
