<template>
  <div :class="`mo-form-control ${modeOptions} w-full mb-3`">
    <label
      :for="id"
      class="mr-2"
    >{{ label }}</label>
    <slot />
    <div
      v-if="help || verify"
      class="help-or-verify-text"
    >
      {{ verify | help }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
export enum ModeType{
  INLINE = "inline",
  BLOCK = "block",
  INSIDE = "inside"
}
export default {
  created() {
    console.log(this.$attrs);
  }
};
</script>

<script setup lang="ts">
interface Props{
  id:string
  mode?: modeType
  label:string
  verify?:string
  help?:string
}
const props = withDefaults(defineProps<Props>(), {
  verify: "",
  help: "",
  mode: ModeType.INLINE
});
const { mode } = props;

const modeOptions = computed(() => {
  let classStr = "";
  switch (mode) {
    case ModeType.BLOCK:
      classStr += `block leading-normal`;
      break;
    case ModeType.INSIDE:
      classStr += ``;
      break;
    default:
      classStr += `flex items-center`;
      break;
  }
  return classStr;
});
</script>

<style lang="scss" scoped>
.block {

  >label {

    @apply leading-normal text-xl mb-1 ml-1 ;

    display: block;
  }
}
</style>
