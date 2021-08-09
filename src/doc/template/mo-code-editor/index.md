---
title: memo-code-editor
meta:
  - name: description
  - content: 代码编辑
---

# 代码编辑
> 可以在线进行vue3代码编写并编译，实际这个可以运用任何时候语言，只要你为他们设置正确的编译器。默认支持 vue3。编辑器是基于[vue-markdown-editor](http://ckang1229.gitee.io/vue-markdown-editor/zh/api.html#toolbar-config)和[codemirror](https://codemirror.net/index.html)和[vite-vue3-compiler]()。

<script setup lang="ts">
import colourText from "@components/code-editor/index.vue";
</script>

## 默认显示
<div class="demo"><colourText/></div>
