export const demo1 = `<template>
  <div class="demo grid grid-cols-2">
    <moLoading></moLoading>
    <moLoading type="dot"></moLoading>
  </div>
</template>
<script setup lang="ts">
import moLoading from "@components/loading/index.vue";
</script>`;

export const demo2 = `<template>
  <div class="demo grid grid-cols-2">
    <moLoading text="加载中..." color="danger"></moLoading>
    <moLoading type="dot" text="加载中..." color="danger"></moLoading>
  </div>
</template>
<script setup lang="ts">
  import moLoading from "@components/loading/index.vue";
</script>`;

export const demo3 = `<template>
  <div class="demo grid grid-cols-2">
    <moLoading text="加载中..." color="danger"></moLoading>
    <moLoading type="dot" text="加载中..." color="danger"></moLoading>
  </div>
</template>
<script setup lang="ts">
  import moLoading from "@components/loading/index.vue";
</script>`;

export const demo4 = `<template>
  <div class="demo h-40 bg-primary">
  <moLoading text="加载中..." mode="loading" color="light"></moLoading>
  </div>

  <div class="demo h-40 bg-danger">
  <moLoading text="加载中..." type="dot" mode="loading" color="warning"></moLoading>
  </div>
</template>
<script setup lang="ts">
  import moLoading from "@components/loading/index.vue";
</script>`;

export const path = "../../doc";
