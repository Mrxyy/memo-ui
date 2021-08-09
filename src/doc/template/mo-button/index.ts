export const demo1 = `<template>
  <div class="demo grid grid-cols-3 items-center">
    <moButton color="danger" size="small" type="outline">
      small
    </moButton>
    <moButton>mideum</moButton>
    <moButton color="wraning" size="larger" type="link">larger</moButton>
  </div>
</template>

<script setup lang="ts">
import moButton from "@components/buttons/index.vue";
</script>
`;

export const demo2 = `<template>
  <div class="demo grid grid-cols-3">
    <moButton color="secondary" :disable="true">mideum</moButton>
  </div>
</template>

<script setup lang="ts">
import moButton from "@components/buttons/index.vue";
</script>
`;

export const demo3 = `<template>
  <div class="demo grid grid-cols-3">
    <moButton :onclick="al">alert</moButton>
  </div>
</template>

<script setup lang="ts">
import moButton from "@components/buttons/index.vue";
const al = ()=>alert("memo")
</script>
`;

export const path = "../../doc";
