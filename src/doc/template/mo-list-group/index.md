---
title: memo-list-group
meta:
  - name: description
  - content: 列表组
---

# 列表组
> your description。
<script setup lang="ts">
  import {demo1,demo2,path} from "./index.ts";
</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## 自定义列表
<CodeEditor :filePath="path" :value="demo2"/>

## props

### type

```ts
enum operationType{
  EXPAND="expand",
}

interface listItem{
  text:string,
  operation?:operationType,
  ckeckAble:boolean,
  iconClass?:string
  isExpand:boolean,
}
```
| props         | type     | description | default |
| ------------- | -------- | ----------- | ------- |
| data          | listItem | 数据        | []      |
| showCkecked   | boolean  | 显示可选    | false   |
| listItemClass | string   | icon 样式   | ''      |

### listItem
| props      | type          | description      | default |
| ---------- | ------------- | ---------------- | ------- |
| text       | jsx/string    | 内容文字         | ‘’      |
| operation? | operationType | 操作类型         | EXPAND  |
| ckeckAble  | boolean       | 是否选中         | false   |
| iconClass  | string        | list-style-class | ''      |
| isExpand   | boolean       | 是否展开         | false   |


## slot

### v-slot
  + #default="itemData"
  + #operation="itemData"
  + #child-box="itemData"

> itemData为行的数据，类型为:listItem

