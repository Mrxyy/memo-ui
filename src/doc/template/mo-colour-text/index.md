---
title: memo-colour-text
meta:
  - name: description
  - content: 彩色字体
---
# 彩色字体
> 彩色字体是memo的logo衍生出组件。

<script setup lang="ts">
import {demo1,demo2,demo3,path} from "./index.ts"
</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## 自定义文字
<CodeEditor :filePath="path" :value="demo2"/>

## 自定义颜色
<CodeEditor :filePath="path" :value="demo3"/>


## props:

| props  | type   | description | default                    |
| ------ | ------ | ----------- | -------------------------- |
| text   | string | 文字        | memo                       |
| bg     | string | 背景        | colors.emerald[500]        |
| color  | string | 字体颜色    | colors.amber[400]          |
| shadow | string | 字体shadow  | shadow: colors.orange[200] |
