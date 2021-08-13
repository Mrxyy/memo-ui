---
title: memo-layout
meta:
  - name: description
  - content: layout
---

# 页面布局
> memo-ui提供了不同的页面布局。

<script setup lang="ts">
  import {demo1,path} from "./index.ts";
</script>

## 上左右布局
<CodeEditor :filePath="path" :value="demo1"/>

| props    | type     | description      | default |
| -------- | -------- | ---------------- | ------- |
| onScroll | function | main区域滚动事件 |         |

## slot
 + `header` 头部插槽
 + `side`   左侧插槽
 + `main`   主要插槽

### v-slot
  +  #main={scrollContainer}
    - scrollContainer:滚动容器Element实例

