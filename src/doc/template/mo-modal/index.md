---
title: memo-modal
meta:
  - name: description
  - content: 模态框
---

# 默认
> your description。
<script setup lang="ts">
  // import {demo1,path} from "./index.ts";
  import moModal from "../../../components/modal/index.vue";
  import moButton from "../../../components/buttons/index.vue";
  import moTabs from "@components/tab/index.vue";
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
  }];
  const a = (ref)=>{
    console.count('🐑：');
    console.log(ref);
    ref.switchShow();
  }
</script>

### 默认
<div class="demo">
  <moButton @Click="a($refs.modal_1)">这是一个模态框</moButton>
  <moModal ref="modal_1" title="这是一个模态框">
    <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
  </moModal>
</div>

### 侧边滑动模态框
<div class="demo">
  <moButton @Click="a($refs.modal_2)">侧边滑动模态框</moButton>
  <moModal ref="modal_2" title="这是一个模态框" type="silde">
    <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
          <moTabs
            class="my-4"
            :tabs="tabs"
          >
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
  </moModal>
</div>

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
