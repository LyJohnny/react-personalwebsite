import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served at the domain root (johnnyly.dev), so base is "/".
// outDir is "build" to keep the existing `gh-pages -d build` deploy script.
export default defineConfig({
  plugins: [react()],
  // CRA/Webpack defined `global` for the browser; Vite does not. Some older
  // deps (e.g. react-image-lightbox) reference it and crash without this.
  define: {
    global: "globalThis",
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
