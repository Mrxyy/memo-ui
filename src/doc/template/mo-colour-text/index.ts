export const demo1 = `<template>
  <div class="demo"><colour-text  /></div>
</template>

<script setup lang="ts">
import colourText from "@components/colour-text/memo.vue";
</script>
`;

export const demo2 = `<template>
  <div class="demo"><colour-text text="自定义文字" /></div>
</template>

<script setup lang="ts">
import colourText from "@components/colour-text/memo.vue";
</script>
`;

export const demo3 = `<template>
<div class="demo"><colour-text text="自定义文字" bg="black" color="white" shadow="red"/></div>
</template>

<script setup lang="ts">
import colourText from "@components/colour-text/memo.vue";
</script>
`;

export const path = "../../doc";
