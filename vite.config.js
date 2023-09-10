import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import constants from "./constants";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: constants.data,
      helpers: {
        ifeq: (a, b, options) => {
          return a == b ? options.fn(this) : options.inverse(this);
        },
      },
    }),
  ],
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        login: resolve(__dirname, "src/pages/login/login.html"),
        chat: resolve(__dirname, "src/pages/chat/chat.html"),
        profile: resolve(__dirname, "src/pages/profile/profile.html"),
        registration: resolve(
          __dirname,
          "src/pages/registration/registration.html",
        ),
        profile_main: resolve(__dirname, "src/pages/profile/profile.html"),
        profile_change_data: resolve(
          __dirname,
          "src/pages/profile/profile_change_data.html",
        ),
        profile_change_password: resolve(
          __dirname,
          "src/pages/profile/profile_change_password.html",
        ),
        500: resolve(__dirname, "src/pages/errors/500.html"),
        404: resolve(__dirname, "src/pages/errors/404.html"),
      },
      external: {
        
      }
    },
  },
  server: {
    port: 3000,
  },
});
