import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "./src/plugins/index";
const vueJsx = require("@vitejs/plugin-vue-jsx");
const eslint = require("@rollup/plugin-eslint");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/, /mk.*/]
    }),
    Markdown({
      headEnabled: true // <--
    }),
    vueJsx({}),
    eslint({
      include: ["src/**/*.js", "src/**/*.ts"],
      exclude: ["**/node_modules", "**/*.scss", "**/*.css", "**/*.png", "**/*.svg", "**/*.jpg"]
    })
  ]
});
