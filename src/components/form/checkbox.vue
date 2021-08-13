<template>
  <div
    :class="`mo-checkbox inline-block align-text-top relative styleProps ${$attrs.class}` "
  >
    <moInput
      type="checkbox"
      class="appearance-none bi bi-check"
      :="excludeAttr($attrs,['class'])"
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
interface Props{
  width?:string,
  height?:string
}

withDefaults(defineProps<Props>(), {
  width: "auto",
  height: "auto"
});

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
.styleProps {
  width: v-bind(width);
  height: v-bind(height);
}

.mo-checkbox {

  .mo-input ::v-deep {

    @apply w-full;

    input {

      &::before {
        font-weight: 700 !important;

        @apply hidden;
      }

      &:checked {

        &::before {

          @apply block absolute text-primary  left-1/2 top-1/2 m-auto transform -translate-x-1/2 -translate-y-1/2;
        }
      }
    }
  }
}
</style>
