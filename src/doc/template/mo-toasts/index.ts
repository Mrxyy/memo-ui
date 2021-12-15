
export const demo1 = `<template>
  <div class="demo grid grid-cols-5">
    <moButton @click="btn1">警告信息</moButton>
    <moButton @click="btn2">输入信息</moButton>
    <moButton @click="btn3">提示信息</moButton>
    <moButton @click="btn4">确认弹窗</moButton>
    <moButton color="danger" @click="btn5">弹出信息</moButton>
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
  const btn2 = ()=>toasts.prompt({
    detail:11,
    text:"请输入文件名",
    onConfirm:(value)=>{
      alert(value);
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
  const btn5 = ()=>toasts.alert({
    type:"danger",
    detail:11,
    text:"王者更新，赶快来下载体验吧 !!!",
    onConfirm:()=>{
      alert(1);
      return true
    }
  })
</script>
`;

export const path = "../../doc";
