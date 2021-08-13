---
title: memo-card
meta:
  - name: description
  - content: 卡片
---

# 卡片
> 一个card容器。
<script setup lang="ts">
  import {demo1,path} from "./index.ts";
</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## Props

| props   | type   | description | default |
| ------- | ------ | ----------- | ------- |
| width   | string | 宽度        | auto    |
| height  | string | 高度        | auto    |
| padding | string | 内间距      | ‘.p-4’  |
