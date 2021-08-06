---
title: memo-button
meta:
  - name: description
  - content: 按钮
---

# 代码编辑
> 使用memo的自定义按钮样式进行表单、对话框等操作，并支持多种大小、状态等。
<script setup lang="ts">
import moButton from "../components/buttons/index.vue";
const al = ()=>alert("memo")
</script>

## 默认显示
<div class="demo grid grid-cols-3">
  <moButton color="danger" size="small" type="outline">
    small
  </moButton>
  <moButton>mideum</moButton>
  <moButton color="wraning" size="larger" type="link">larger</moButton>
</div>

## 禁止
<div class="demo grid grid-cols-3">
  <moButton color="secondary" :disable="true">mideum</moButton>
</div>

## 点击事件
<div class="demo grid grid-cols-3">
  <moButton :onclick="al">alert</moButton>
</div>

## props:

| props   | type                      | description | default        |
| ------- | ------------------------- | ----------- | -------------- |
| color   | string                    | 颜色        | colors.primary |
| size    | small \| medium \| larger | 大小        | medium         |
| type    | fill  \|link \| outline   | 类型        | fill           |
| disable | boolean                   | 禁止        | false          |
