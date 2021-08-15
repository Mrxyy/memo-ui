export const dome1 = `<template>
<div class="demo grid grid-cols-3">
  <h1>这是一个徽章<moBabge>10</moBabge></h1>
  <h1>
    这是一个有颜色徽章<moBabge color="danger">
      11
    </moBabge>
  </h1>
</div>
</template>

<script setup lang="ts">
import moBabge from "@components/badge/index.vue";
</script>
`;

export const dome2 = `<template>
  <div class="demo grid grid-cols-3">
    <h1>这是一个徽章<moBabge color="primary" type="ELLIPSE">椭圆</moBabge></h1>
  </div>
</template>

<script setup lang="ts">
import moBabge from "@components/badge/index.vue";
</script>
`;

export const dome3 = `<template>
  <div class="demo grid grid-cols-3">
    <h1 class="relative py-1 px-2 w-max bg-primary">这是一个徽章<moBabge color="warning" type="DOT" isBubble></moBabge></h1>
  </div>
</template>

<script setup lang="ts">
import moBabge from "@components/badge/index.vue";
</script>
`;

export const path = "../../doc";
