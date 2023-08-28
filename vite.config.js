import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [handlebars()],
  root: "src",
  build: {
    outDir: "../dist",
  },
});
