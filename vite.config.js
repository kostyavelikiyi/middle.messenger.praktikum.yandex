import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        login: {
          data: [
            {
              label_name: "Username",
              label_id: "name",
              type: "input",
              sub_type: "text",
            },
            {
              label_name: "Password",
              label_id: "psw",
              type: "input",
              sub_type: "password",
            },
            {
              label_name: "Login",
              type: "submit",
            },
            {
              type: "href",
              link: "../registration/registration.html",
              label_name: "Sign up",
            },
          ],
        },
        registration: {
          data: [
            {
              label_name: "Email",
              label_id: "email",
              type: "input",
              sub_type: "email",
            },
            {
              label_name: "Username",
              label_id: "name",
              type: "input",
              sub_type: "text",
            },
            {
              label_name: "First Name",
              label_id: "first_name",
              type: "input",
              sub_type: "text",
            },
            {
              label_name: "Second Name",
              label_id: "second_name",
              type: "input",
              sub_type: "text",
            },
            {
              label_name: "Phone",
              label_id: "phone",
              type: "input",
              sub_type: "tel",
            },
            {
              label_name: "Password",
              label_id: "psw",
              type: "input",
              sub_type: "password",
            },
            {
              label_name: "Login",
              type: "submit",
            },
            {
              type: "href",
              link: "../login/login.html",
              label_name: "Sign in",
            },
          ],
        },
      },
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
        registration: resolve(
          __dirname,
          "src/pages/registration/registration.html"
        ),
      },
    },
  },
});
