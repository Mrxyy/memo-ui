---
title: memo-menu
meta:
  - name: description
  - content: layout
---

# 代码编辑
> memo-ui提供了不同的页面布局。

<script setup lang="ts">
  import {demo1,path} from "./index.ts";
</script>

## 上左右布局
<CodeEditor :filePath="path" :value="demo1"/>

| props | type | description | default |
| ----- | ---- | ----------- | ------- |

### slot
 + `header` 头部插槽
 + `side`   左侧插槽
 + `main`   主要插槽

