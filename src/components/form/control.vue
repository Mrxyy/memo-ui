<template>
  <div :class="`mo-form-control ${modeOptions}  mb-3`">
    <label
      :for="id"
      class="mr-2"
    >{{ label }}</label>
    <slot />
    <div
      v-if="help || verify"
      :class="`help-or-verify-text whitespace-nowrap ml-2 ${help ? 'text-info' : ''}`"
    >
      {{ verify || help }}
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
  selfInline?:false
}
const props = withDefaults(defineProps<Props>(), {
  verify: "",
  help: "",
  mode: ModeType.INLINE,
  selfInline: false
});
const { mode, selfInline } = props;

const modeOptions = computed(() => {
  let classStr = "";
  switch (mode) {
    case ModeType.BLOCK:
      classStr += `${selfInline ? "w-auto inline-" : "w-full "}block leading-normal`;
      break;
    case ModeType.INSIDE:
      classStr += ``;
      break;
    default:
      classStr += `${selfInline ? "w-auto inline-" : "w-full "}flex items-center`;
      break;
  }
  return classStr;
});
</script>

<style lang="scss" scoped>
.block {

  >label {

    @apply leading-normal text-xl mb-1 ;

    display: block;
  }
}
</style>
