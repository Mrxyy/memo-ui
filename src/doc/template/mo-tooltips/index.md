---
title: memo-tooltips
meta:
  - name: description
  - content: 提示
---

# 代码编辑
> memo-ui提供了左侧菜单组件，得益于vue的组件递归。菜单可以分明的现实。
<script setup lang="ts">
  import {demo1,demo2,path} from "./index.ts";
</script>

## 默认
<CodeEditor :filePath="path" :value="demo1"/>

## 默认显示*block*
<CodeEditor :filePath="path" :value="demo2"/>

### type

```ts
interface Props{
  tipText:string
  dirrection:"top"|"bottom"|"left"|"right"
  defaultshow:string,
  triggerEvent:string
}
```
| props        | type                  | description  | default |
| ------------ | --------------------- | ------------ | ------- |
| tipText      | string                | tip文字      | ''      |
| dirrection   | top\bottom\left\right | tooltip方向  | top     |
| defaultshow  | boolean               | 默认是否显示 | false   |
| triggerEvent | hover                 | 什么事件触发 | hover   |
