import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/01-ts-basics/",
  build: {
    outDir: "docs",  # Изменяем на docs для GitHub Pages
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      }
    }
  }
});
