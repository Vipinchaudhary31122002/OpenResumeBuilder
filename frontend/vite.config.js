import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  // for implementing absolute for importing file
  resolve: {
    alias: {
      src: "/src",
    },
  },
  // Set up proxy for every request that start with /api to forward it to server url.
  server: {
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
