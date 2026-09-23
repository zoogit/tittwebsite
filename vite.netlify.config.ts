import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "netlify-dist",
    rollupOptions: {
      input: {
        main: "index.html",
        designSystem: "design-system/index.html",
      },
    },
  },
  plugins: [react()],
});
