import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import VMdEditor from "@kangc/v-md-editor/lib/codemirror-editor";

import App from "./App.vue";
import router from "./site/router";
import { startorTransformPath } from "./utils/viteGlobalImport";

import "./styles/index.scss";

// 主题
import "@kangc/v-md-editor/lib/style/codemirror-editor.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github.js";
import "@kangc/v-md-editor/lib/theme/style/github.css";

// highlightjs
import hljs from "highlight.js";

// icon
import "bootstrap-icons/font/bootstrap-icons.css";

// codemirror 编辑器的相关资源
import Codemirror from "codemirror";
// mode
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/vue/vue";
// edit
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/matchbrackets";
// placeholder
import "codemirror/addon/display/placeholder";
// active-line
import "codemirror/addon/selection/active-line";
// scrollbar
import "codemirror/addon/scroll/simplescrollbars";
import "codemirror/addon/scroll/simplescrollbars.css";
// style
import "codemirror/lib/codemirror.css";

import codeEditor from "./components/code-editor/index.vue";

VMdEditor.Codemirror = Codemirror;
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);
app.use(createHead());
app.use(VMdEditor);
app.use(router);
console.log("app mount before but created");
app.mount("#app");
console.log("app mounted");
app.component("CodeEditor", codeEditor);
startorTransformPath();
console.log("done");
