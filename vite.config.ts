import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/01-ts-basics/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    
      external: [],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),

      "src": path.resolve(__dirname, "./src"),
    },
  },

  optimizeDeps: {
    include: ["src/**/*"],
  },
});
