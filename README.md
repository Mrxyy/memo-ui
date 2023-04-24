# README
+ view：[memo-ui](https://mk-editor.glitch.me/)
## 用法
```typescript
import { createApp } from 'vue';
import memo from "memo-ui";
import "memo-ui/style.css";
const app = createApp(App);
app.use(memo);
app.mount('#app');
```
## 关于memo
> memo-ui是在vue3基础上构建的一个ui库。技术栈：vue3、vite、ts、scss、tailwindcss。提供丰富的组件以便于更快更高效构建你的网站。
## 注意说明⚠️
> memo-ui的样式是基于tailwindcss构建，是在继承tailwindcss基础组件、工具类、base标签之上进行了一些样式组件扩展。所以在使用memo-ui构建网站的时候你可以使用他们。
## 下一步计划
+ 给菜单组添加，envt事件 feat: 能够自定义添加任何事件（direction->el->bind(event)）
+ ~~可以分离document 和 libary~~
+ 快速接入新组建和文档脚本

## reference

+ NPM: [NPM](https://www.npmjs.com/package/memo-ui)
+ github: [github](https://github.com/Mrxyy/memo-ui)
