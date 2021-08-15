
export const demo1 = `<template>
  <div class="demo grid grid-cols-4">
    <moButton @click="btn1">警告信息</moButton>
    <moButton @click="btn2">弹出信息</moButton>
    <moButton @click="btn3">提示信息</moButton>
    <moButton @click="btn4">确认弹窗</moButton>
  </div>
</template>
<script setup lang="ts">
  import toasts from "@components/toasts/index.tsx"
  import moButton from "@components/buttons/index.vue"

  const btn1 = ()=>toasts.warnMessage({
    text:"王者更新，赶快来下载体验吧 !!!",
    onConfirm:()=>{
      alert(1);
      return true;
    },
    detail:"《王者荣耀》是由腾讯游戏天美工作室群开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游。"
  })
  const btn2 = ()=>toasts.alert({
    type:"danger",
    text:"王者更新，赶快来下载体验吧 !!!",
    onConfirm:()=>{
      alert(1);
      return true;
    }
  })
  const btn3 = ()=>toasts.infoMessage({
    text:"王者更新，赶快来下载体验吧 !!!",
    isAlways:true,
    type:"warning",
    isAlways:true,
  })
  const btn4 = ()=>toasts.confirm({
    text:"王者更新，赶快来下载体验吧 !!!",
    type:"warning",
    detail:"《王者荣耀》是由腾讯游戏天美工作室群开发并运行的一款运营在Android、IOS、NS平台上的MOBA类国产手游。"
  })
</script>
`;

export const path = "../../doc";
