---
title: memo-**
meta:
  - name: description
  - content: 切换栏
---

# 默认
> your description。
<script setup lang="ts">
  // import {demo1,path} from "./index.ts";
  import moTabs from "../../../components/tab/index.vue";
  const tabs = [{
      id: 1,
      label: "tab-1"
    }, {
      id: 2,
      label: "tab-2"
    }, {
      id: 3,
      label: "tab-3"
    }, {
      id: 4,
      label: "tab-4"
    }]
</script>

## 默认显示
<!-- <CodeEditor :filePath="path" :value="demo1"/> -->
<div class="demo">
  <moTabs :tabs="tabs">
    <template #1>
        <div>tab-1</div>
    </template>
      <template #2>
        <div>tab-2</div>
    </template>
      <template #3>
        <div>tab-3</div>
    </template>
      <template #4>
        <div>tab-4</div>
    </template>
  </moTabs>
</div>

## 垂直方向
<div class="demo">
  <moTabs :tabs="tabs" direction="column">
    <template #1>
        <div>tab-1</div>
    </template>
      <template #2>
        <div>tab-2</div>
    </template>
      <template #3>
        <div>tab-3</div>
    </template>
      <template #4>
        <div>tab-4</div>
    </template>
  </moTabs>
</div>

## 主题
<div class="demo grid grid-cols-2 gap-2">
  <moTabs :tabs="tabs" activeType="link">
    <template #1>
        <div>tab-1</div>
    </template>
      <template #2>
        <div>tab-2</div>
    </template>
      <template #3>
        <div>tab-3</div>
    </template>
      <template #4>
        <div>tab-4</div>
    </template>
  </moTabs>
   <moTabs :tabs="tabs" activeType="tab">
    <template #1>
        <div>tab-1</div>
    </template>
      <template #2>
        <div>tab-2</div>
    </template>
      <template #3>
        <div>tab-3</div>
    </template>
      <template #4>
        <div>tab-4</div>
    </template>
  </moTabs>
</div>

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
