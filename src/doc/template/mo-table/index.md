---
title: memo-**
meta:
  - name: description
  - content: 表格
---

# table 表格
> memo-ui表格是基于table布局，是一个可以自定义配置的组件，可通过自己配置slot来定制化表格。

<script setup lang="ts">
  import {demo1,demo2,demo3,path} from "./index.ts";
  import motable from "../../../components/table/index.vue";


</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## table模式
<CodeEditor :filePath="path" :value="demo2"/>


## 定制表格
<CodeEditor :filePath="path" :value="demo3"/>

## Props

| props          | type       | description        | default |
| -------------- | ---------- | ------------------ | ------- |
| field          | Object     | 字段描述对象       |         |
| rowData        | Object     | row数据            |         |
| firstOperation | boolean    | 是否要左边的操作列 | false   |
| endOperation   | boolean    | 是否要右边的操作列 | false   |
| footer         | boolean    | 是否需要footer     | false   |
| mode           | table\view | 采用什么模式       | view    |

## slot

### 表头
 + herder-first-operation
 + herder-end-doperation
 + herder-*field*

### 表数据
 + row-first-operation
 + row-end-operation
 + row-*field*

### 表尾
 + footer-first-operation
 + footer-end-operation
 + footer-*field*

### v-slot
 + herder-first-operation、herder-end-doperation、footer-first-operation、footer-end-operation ====》{data} data为RowData被ref包装的proxy
 + herder-*field*、footer-*field* ===》{value,index} value 是字段数据，index 是字段字符串
 + row-*field* ====》{value,fieldValue,data,rowIndex,columnIndex} value是当前row数据、fieldValue是该字段数据、columnIndex该列的字段、rowIndex是该行索引、data是表格总数据
