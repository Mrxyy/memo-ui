<template>
  <div :class="`mo-card border border-border p-4 rounded shadow ${padding !== '' && 'constom-padding'}`">
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props{
width?:string
height?:string
padding?:string
}
withDefaults(defineProps<Props>(), {
  width: "auto",
  height: "auto",
  padding: ""
});
</script>

<style lang="scss" scoped>
.mo-card {
  width: v-bind(width);
  height: v-bind(height);

  &.constom-padding {
    padding: v-bind(padding);
  }
}
</style>
