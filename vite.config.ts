import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "./src/plugins/index";
const vueJsx = require("@vitejs/plugin-vue-jsx");
const eslint = require("@rollup/plugin-eslint");
const path = require("path");

// https://vitejs.dev/config/

export default defineConfig(() => {
  const isLibraryMode = process.env.target === "library";
  const config = {
    optimizeDeps: {
      include: ["theme"] //! vite bug:由于tailwindcss 走的node 所以这个文件需要 commoonjs，但是浏览器中只能使用es module，所以需要vite构建。
    },
    server: {
      // force: true
    },
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
    ],
    resolve: {
      alias: {
        // 解决方案,vite 虚拟文件不能解析相对路径
        "@components": "/src/components"
      },
      preserveSymlinks: isLibraryMode
    }
  };
  console.log(process.env.target, "library");
  if (isLibraryMode) {
    const libaryConfig = {
      build: {
        lib: { entry: "./src/index.ts", name: "memo", formats: ["es", "umd"] },
        rollupOptions: {
          // 请确保外部化那些你的库中不需要的依赖
          external: ["vue"],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: "Vue"
            }
          }
        },
        minify: true
      },
      publicDir: ""
    };
    Object.assign(config, libaryConfig);
    console.log(config);
  }

  return config;
});
