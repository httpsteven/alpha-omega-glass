import { defineConfig } from "vite";

// Static, single-page marketing site. The whole site lives in index.html
// (inline CSS + JS); assets in /public are served from the web root.
export default defineConfig({
  root: ".",
  publicDir: "public",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
