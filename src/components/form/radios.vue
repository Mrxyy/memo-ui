<template>
  <div
    :class="`mo-radio relative ${$attrs.class}` "
  >
    <moInput
      :="excludeAttr($attrs,['class','width'])"
      type="radio"
      class="appearance-none"
    />
  </div>
</template>

<script lang="ts">
import moInput from "./input.vue";
export default {
  inheritAttrs: false
};
</script>
<script lang="ts" setup>
const excludeAttr = (attrs:any, keyArr?:string[]) => {
  const excludeAttr = Object.assign({}, attrs);
  keyArr && keyArr.forEach((v:string) => {
    if (v in excludeAttr) {
      delete excludeAttr[v];
    }
  });
  return excludeAttr;
};
</script>

<style lang="scss" scoped>
.mo-radio {

  .mo-input ::v-deep {

    @apply rounded-full;

    input:checked {

      &::before {
        width: 60%;
        height: 60%;
        content: '';

        @apply block bg-primary absolute rounded-full left-1/2 top-1/2 m-auto transform -translate-x-1/2 -translate-y-1/2;
      }
    }
  }
}
</style>
