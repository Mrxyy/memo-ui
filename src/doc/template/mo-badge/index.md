---
title: memo-badge
meta:
  - name: description
  - content: 徽章
---

# 徽章
> 使用memo的自定义按钮样式进行表单、对话框等操作，并支持多种大小、状态等。

<script setup lang="ts">
import {dome1,dome2,dome3,path} from "./index.ts"
</script>

## 默认显示
<CodeEditor :filePath="path" :value="dome1"/>


## 椭圆
<CodeEditor :filePath="path" :value="dome2"/>

## 提示气泡
<CodeEditor :filePath="path" :value="dome3"/>

## props

| props     | type      | description                      | default          |
| --------- | --------- | -------------------------------- | ---------------- |
| color     | string    | 颜色                             | colors.secondary |
| type      | BadgeType | 类型                             | TEXT             |
| isBubble  | boolean   | 是否有气泡(显示在父元素的右上角) | false            |
| textColor | string    | 字体颜色                         | white            |

