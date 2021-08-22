---
title: memo-menu
meta:
  - name: description
  - content: 菜单
---

# 菜单
> memo-ui提供了嵌套级组件，得益于vue的组件递归。菜单可以分明的现实。
<script setup lang="ts">
  // import {demo1,path} from "./index.ts";
  import {ref} from "vue";
  import moNavbar from "@components/navbar/index.vue";
  const data = ref([{
  id: "home",
  name: "首页",
  route: "/"
  }, {
    id: "document",
    name: "文档",
    route: "/document"
  }, {
    id: "componment",
    name: "组件",
    route: "/componment"
  }, {
    id: "log",
    name: "更新日志",
    route: "/log"
  }]);
</script>

## 默认显示
<div class="demo">
<moNavbar :value="data" :active-item="[1]"/>
</div>

> mo-menu 是非常灵活的,例如：
  + 如果你传入route选项，会自动根据你是否注册过vue-router来开启route功能。
  + menu内部使用父组件使用provide向子组件提供自己reject的数据。保证数据向下一致性以及自己的独立性。
  + menu是memo-ui底层tree-data的可视化形式。

## props
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

| props      | type                | description | default |
| ---------- | ------------------- | ----------- | ------- |
| value      | menuItem[]          | 菜单的数据  | []      |
| activeItem | number[] / menuItem | 激活的item  | []      |

### menuItem

| props      | type       | description | default    |
| ---------- | ---------- | ----------- | ---------- |
| name       | string     | 显示名称    |            |
| children？ | menuItem[] | 子菜单      | []         |
| id?        | string     | id          | ''         |
| expand     | boolean    | false       | 展开子菜单 |  |
| route      | string     | 调转路由    |            |

