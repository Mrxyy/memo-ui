---
title: memo-button
meta:
  - name: description
  - content: 按钮
---

# button按钮
> 使用memo的自定义按钮样式进行表单、对话框等操作，并支持多种大小、状态等。

<script setup lang="ts">
import {demo1,demo2,demo3,path} from "./index.ts"
</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## 禁止
<CodeEditor :filePath="path" :value="demo2"/>

## 点击事件
<CodeEditor :filePath="path" :value="demo3"/>

## props

| props   | type                      | description | default        |
| ------- | ------------------------- | ----------- | -------------- |
| color   | string                    | 颜色        | colors.primary |
| size    | small \| medium \| larger | 大小        | medium         |
| type    | fill  \|link \| outline   | 类型        | fill           |
| disable | boolean                   | 禁止        | false          |
