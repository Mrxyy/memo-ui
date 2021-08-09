---
title: memo-form
meta:
  - name: description
  - content: 表单
---

# 代码编辑
> 使用memo提供丰富的表单功能。例如：input、select、checkbox、radios、switch。
<script setup lang="ts">
import {demo1,demo2,demo3,path} from "./index.ts"
</script>

## overview总览
<CodeEditor :filePath="path" :value="demo1"/>

## control
> 用于表单组件布局控制。

### control内部显示模式,*mode*指定ModeType类型，inline、block、inside指定内部label显示方式为*块*或者*内联*。通过*selfInline*指定自身外部是否是内联显示。
### slot为制定表单组件。id指定label的*for*。
### label指定label文本
<CodeEditor :filePath="path" :value="demo2"/>

### 配合表单验证
<CodeEditor :filePath="path" :value="demo3"/>

## input
> input 是一个底层的表单组件具有灵活的自定义性，其他的form组件都依赖于它。

## select


## checkbox

## radios

## switch

## props:

```
  export enum ModeType{
    INLINE = "inline",
    BLOCK = "block",
    INSIDE = "inside"
  }
```

| props      | type     | description  | default |
| ---------- | -------- | ------------ | ------- |
| id         | string   | label-for    | ''      |
| mode       | ModeType | 内部元素表现 | INLINE  |
| selfInline | boolean  | 外部表现     | false   |
| label      | string   | label文本    | ''      |
| help       | string   | 提示         | ''      |

