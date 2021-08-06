---
title: memo-badge
meta:
  - name: description
  - content: 徽章
---

# 代码编辑
> 使用memo的自定义按钮样式进行表单、对话框等操作，并支持多种大小、状态等。
<script setup lang="ts">
import moBabge from "../components/badge/index.vue";
</script>

## 默认显示
<div class="demo grid grid-cols-3">
  <h1>这是一个徽章<moBabge>10</moBabge></h1>
   <h1>这是一个有颜色徽章<moBabge color="danger">11</moBabge></h1>
</div>

## 椭圆
<div class="demo grid grid-cols-3">
  <h1>这是一个徽章<moBabge color="primary" type="ELLIPSE">椭圆</moBabge></h1>
</div>

## 提示气泡
<div class="demo grid grid-cols-3">
  <h1 class="relative py-1 px-2 w-max bg-primary">这是一个徽章<moBabge color="wraning" type="DOT" isBubble></moBabge></h1>
</div>

## props:

| props     | type      | description                      | default          |
| --------- | --------- | -------------------------------- | ---------------- |
| color     | string    | 颜色                             | colors.secondary |
| type      | BadgeType | 类型                             | TEXT             |
| isBubble  | boolean   | 是否有气泡(显示在父元素的右上角) | false            |
| textColor | string    | 字体颜色                         | white            |

