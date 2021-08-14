---
title: memo-**
meta:
  - name: description
  - content: mo-toasts
---

# 默认
> your description。
<script setup lang="ts">
  // import {demo1,path} from "./index.ts";
  import motToasts from "../../../components/toasts/index.vue";
</script>

## 默认显示
<!-- <CodeEditor :filePath="path" :value="demo1"/> -->
<motToasts></motToasts>

### type

```ts
interface menuItem{
  name:string,
  children?:menuItem[],
  id?:string,
  expand?:boolean,
  route?:any|string
}
```

| props | type | description | default |
| ----- | ---- | ----------- | ------- |
