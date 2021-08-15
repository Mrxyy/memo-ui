"use strict"; Object.defineProperty(exports, "__esModule", { value: true }); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } const __defProp = Object.defineProperty;
const __getOwnPropSymbols = Object.getOwnPropertySymbols;
const __hasOwnProp = Object.prototype.hasOwnProperty;
const __propIsEnum = Object.prototype.propertyIsEnumerable;
const __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
const __spreadValues = (a, b) => {
  for (const prop in b || (b = {})) {
    if (__hasOwnProp.call(b, prop)) { __defNormalProp(a, prop, b[prop]); }
  }
  if (__getOwnPropSymbols) {
    for (const prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop)) { __defNormalProp(a, prop, b[prop]); }
    }
  }
  return a;
};

// src/markdown.ts
const _markdownit = require("markdown-it"); const _markdownit2 = _interopRequireDefault(_markdownit);
const _graymatter = require("gray-matter"); const _graymatter2 = _interopRequireDefault(_graymatter);

// src/utils.ts
function toArray(n) {
  if (!Array.isArray(n)) { return [n]; }
  return n;
}

// src/markdown.ts
const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*>([\s\S]*)<\/script>/mg;
const defineExposeRE = /defineExpose\s*\(/mg;
function extractScriptSetup(html) {
  const scripts = [];
  html = html.replace(scriptSetupRE, (_, script) => {
    scripts.push(script);
    return "";
  });
  return { html, scripts };
}
function extractCustomBlock(html, options) {
  const blocks = [];
  for (const tag of options.customSfcBlocks) {
    html = html.replace(new RegExp(`<${tag}[^>]*\\b[^>]*>[^<>]*<\\/${tag}>`, "mg"), (code) => {
      blocks.push(code);
      return "";
    });
  }
  return { html, blocks };
}
function createMarkdown(options) {
  const markdown = new (0, _markdownit2.default)(__spreadValues({
    html: true,
    linkify: true,
    typographer: true
  }, options.markdownItOptions));
  markdown.linkify.set({ fuzzyLink: false });
  options.markdownItUses.forEach((e) => {
    const [plugin, options2] = toArray(e);
    markdown.use(plugin, options2);
  });
  options.markdownItSetup(markdown);
  return (id, raw) => {
    const { wrapperClasses, wrapperComponent, transforms, headEnabled, frontmatterPreprocess } = options;
    raw = raw.trimLeft();
    if (transforms.before) { raw = transforms.before(raw, id); }
    const { content: md, data } = options.frontmatter ? _graymatter2.default.call(void 0, raw) : { content: raw, data: null };
    let html = markdown.render(md, {});
    if (wrapperClasses) { html = `<div class="${wrapperClasses}">${html}</div>`; } else { html = `<div>${html}</div>`; }
    if (wrapperComponent) { html = `<${wrapperComponent}${options.frontmatter ? ' :frontmatter="frontmatter"' : ""}>${html}</${wrapperComponent}>`; }
    if (transforms.after) { html = transforms.after(html, id); }
    if (options.escapeCodeTagInterpolation) {
      html = html.replace(/<code(.*?)>/g, "<code$1 v-pre>");
    }
    const hoistScripts = extractScriptSetup(html);
    html = hoistScripts.html;
    const customBlocks = extractCustomBlock(html, options);
    html = customBlocks.html;
    const scriptLines = [];
    if (options.frontmatter) {
      const { head, frontmatter } = frontmatterPreprocess(data || {}, options);
      scriptLines.push(`const frontmatter = ${JSON.stringify(frontmatter)}`);
      if (options.exposeFrontmatter && !defineExposeRE.test(hoistScripts.scripts.join(""))) { scriptLines.push("defineExpose({ frontmatter })"); }
      if (headEnabled && head) {
        scriptLines.push(`const head = ${JSON.stringify(head)}`);
        scriptLines.unshift('import { useHead } from "@vueuse/head"');
        scriptLines.push("useHead(head)");
      }
    }
    scriptLines.push(...hoistScripts.scripts);
    const sfc = `<template>${html}</template>
<script setup>
${scriptLines.join("\n")}
<\/script>
${customBlocks.blocks.join("\n")}
`;
    return sfc;
  };
}

// src/head.ts
const headProperties = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
function preprocessHead(frontmatter, options) {
  if (!options.headEnabled) { return frontmatter; }
  const head = options.headField ? frontmatter[options.headField] || {} : frontmatter;
  const meta = head.meta = head.meta || [];
  if (head.title) {
    if (!meta.find((i) => i.property === "og:title")) { meta.push({ property: "og:title", content: head.title }); }
  }
  if (head.description) {
    if (!meta.find((i) => i.property === "og:description")) { meta.push({ property: "og:description", content: head.description }); }
    if (!meta.find((i) => i.name === "description")) { meta.push({ name: "description", content: head.description }); }
  }
  if (head.image) {
    if (!meta.find((i) => i.property === "og:image")) { meta.push({ property: "og:image", content: head.image }); }
    if (!meta.find((i) => i.property === "twitter:card")) { meta.push({ name: "twitter:card", content: "summary_large_image" }); }
  }
  const result = {};
  for (const [key, value] of Object.entries(head)) {
    if (headProperties.includes(key)) { result[key] = value; }
  }
  return Object.entries(result).length === 0 ? null : result;
}

// src/options.ts
function resolveOptions(userOptions) {
  const options = Object.assign({
    headEnabled: false,
    headField: "",
    frontmatter: true,
    exposeFrontmatter: true,
    escapeCodeTagInterpolation: true,
    customSfcBlocks: ["route", "i18n", "style"],
    markdownItOptions: {},
    markdownItUses: [],
    markdownItSetup: () => {
    },
    wrapperClasses: "markdown-body",
    wrapperComponent: null,
    transforms: {},
    frontmatterPreprocess: (frontmatter, options2) => {
      const head = preprocessHead(frontmatter, options2);
      return { head, frontmatter };
    }
  }, userOptions);
  options.wrapperClasses = toArray(options.wrapperClasses).filter((i) => i).join(" ");
  return options;
}

// src/index.ts
function VitePluginMarkdown(userOptions = {}) {
  const options = resolveOptions(userOptions);
  const markdownToVue = createMarkdown(options);
  let virtualFileId = "";
  let a;
  return {
    name: "vite-plugin-md",
    enforce: "pre",
    resolveId(source, importe, option) {
      if (/mk=.*/.test(source)) {
        console.count("🐑：");
        virtualFileId = source.replace(/(.*mk=)|(\?.*)/g, "").replace(/\!--@/g, "#");
        return `${source.replace(/(mk=(.|\s)*)/g, "/mk")}?mk-edit`;
      }
      return null;
    },
    load(id) {
      if (id.endsWith("?mk-edit")) {
        console.count("🐻：");
        return { code: virtualFileId };
      }
    },
    transform(raw, id) {
      if (id.endsWith("?mk-edit")) {
        console.count("🐻：");
        // console.log(id, raw);
      }
      if (id.endsWith(".md")) {
        try {
          a = markdownToVue(id, raw);
          console.count("🐑：");
          // console.log(a);
          return markdownToVue(id, raw);
        } catch (e) {
          this.error(e);
          return "";
        }
      }
    },
    async handleHotUpdate(ctx) {
      if (ctx.file.endsWith(".md")) {
        const defaultRead = ctx.read;
        ctx.read = async function() {
          return markdownToVue(ctx.file, await defaultRead());
        };
      }
    },
    configureServer(server) {
      // 返回一个在内部中间件安装后
      // 被调用的后置钩子
      // server.middlewares.use(async (req, res, next) => {
      //   // 自定义请求处理...
      //   if (/\?mk-edit$/.test(req.originalUrl)) {
      //     console.count("🐻🐑:");
      //     res.setHeader("Content-Type", "application/javascript");

      //     let result;
      //     try {
      //       console.log(req.originalUrl);
      //       result = await server.transformRequest(req.originalUrl);
      //     } catch (error) {
      //       result = "代码格式错误";
      //     }
      //     res.end(result?.code);
      //     // next();
      //   } else {
      //     next();
      //   }
      // });
    }
  };
}
const srcDefault = VitePluginMarkdown;

exports.default = srcDefault;
