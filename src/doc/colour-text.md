---
title: memo-colour-text
meta:
  - name: description
  - content: 彩色字体
---
# 彩色字体
> 彩色字体是memo的logo衍生出组件。

<script setup lang="ts">
import colourText from "../components/colour-text/memo.vue";
</script>

## 默认显示
<div class="demo"><colour-text  /></div>


## 自定义文字
<div class="demo"><colour-text text="自定义文字" /></div>

## 自定义颜色
<div class="demo"><colour-text text="自定义文字" bg="#000" color="#fff" shadow="red"/></div>

## props:

| props  | type   | description | default                    |
| ------ | ------ | ----------- | -------------------------- |
| text   | string | 文字        | memo                       |
| bg     | string | 背景        | colors.emerald[500]        |
| color  | string | 字体颜色    | colors.amber[400]          |
| shadow | string | 字体shadow  | shadow: colors.orange[200] |
