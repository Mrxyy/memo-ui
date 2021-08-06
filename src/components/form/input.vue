<template>
  <div :class="`mo-input flex border border-border rounded overflow-hidden styleProps ${isfocused && 'ring'} ring-primary ring-opacity-25`">
    <slot name="start" />
    <input
      class="w-full p-2 z-10"
      v-bind="$attrs"
      @focus="isfocused = true"
      @blur="isfocused = false"
    >
    <slot name="end" />
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";
export default {
  inheritAttrs: false
};
</script>

<script lang="ts" setup>
interface Props{
  width?:string,
  height?:string
}
withDefaults(defineProps<Props>(), {
  width: "auto",
  height: "auto"
});

const isfocused = ref(false);
</script>

<style lang="scss" scoped>
.styleProps {
  width: v-bind(width);
  height: v-bind(height);
}
</style>
