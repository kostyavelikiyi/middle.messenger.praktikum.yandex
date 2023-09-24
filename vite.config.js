import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import constants from "./constants";

export default defineConfig({
  plugins: [
    // handlebars({
    //   partialDirectory: resolve(__dirname, "src/partials"),
    //   context: constants.data,
    //   _helpers: {
    //     ifeq: (a, b, options) => {
    //       return a == b ? options.fn(this) : options.inverse(this);
    //     },
    //   },
    //   get helpers() {
    //     return this._helpers;
    //   },
    //   set helpers(value) {
    //     this._helpers = value;
    //   },
    // }),
  ],
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        500: resolve(__dirname, "src/pages/errors/500.html"),
        404: resolve(__dirname, "src/pages/errors/404.html"),
      },
      external: {},
    },
  },
  server: {
    port: 3000,
  },
});
