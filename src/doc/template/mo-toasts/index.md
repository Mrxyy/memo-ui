---
title: memo-**
meta:
  - name: description
  - content: mo-toasts
---

# 默认
> your description。
<script setup lang="ts">
  import {demo1,path} from "./index.ts";
  import toasts from "../../../components/toasts/index.tsx";
</script>

## 默认显示
<CodeEditor :filePath="path" :value="demo1"/>

## props

### type
```ts
interface Props{
  type?:"alert"|"confirm"|"message",
  theme?:string,
  text:string,
  onClose?:()=>boolean,
  onConfirm?:()=>boolean,
  onCancel?:()=>boolean,
  isAlways?:boolean
}

class ToastsData {
  type?:"warning" | "info" | "success" | "danger"
  text:string
  id?:string
  detail?:JSX.Element | string
  onClose?:()=>boolean
  onConfirm?:()=>boolean
  onCancel?:()=>boolean
  isAlways:boolean
  duration?:number
  kind?:"alert" | "mesage" | "confirm"
  constructor({type,text,detail,onClose,id,duration,isAlways,kind,onConfirm,onCancel}:ToastsData) {
    this.kind = kind ?? "mesage"
    this.type = type ?? "info"
    this.text = text ?? ""
    this.detail = detail
    this.onClose = onClose
    this.onConfirm = onConfirm
    this.onCancel = onCancel
    this.id = id ?? Date.now().toString()
    this.duration = duration ?? 5000
    this.isAlways = isAlways ?? false
  }
}
```

| props | type | description | default |
| ----- | ---- | ----------- | ------- |
