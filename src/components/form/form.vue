<template>
  <div
    :class="`mo-form border border-border border-${border} py-5 px-4 rounded`"
  >
    <form v-bind="$attrs">
      <slot />
    </form>
  </div>
</template>

<script lang="ts">
export enum BorderType{
  SOLID = "solid",
  DASHED = "dashed",
  DOTTED = "dotted",
  DOUBLE = "double",
  NONE = "none"
}

export default {
  inheritAttrs: false
};
</script>

<script setup lang="ts">

interface Props{
  border?:BorderType
}

withDefaults(defineProps<Props>(), {
  border: BorderType.DOUBLE
});
</script>
