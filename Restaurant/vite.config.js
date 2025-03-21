import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        Apropos: resolve(__dirname, "src/Apropos/Apropos.html"),
      },
    },
  },
});
