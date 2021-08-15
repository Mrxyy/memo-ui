<template>
  <div
    v-if="isShow"
    :class="`mo-toasts inline-flex flex-col rounded-lg overflow-hidden w-min border border-${theme} shadow border-opacity-40`"
  >
    <div :class="`flex items-center justify-between px-2 py-1 w-full text-light bg-${theme} bg-opacity-70`">
      <div class="text ">
        {{ text }}
      </div>
      <moButton
        v-if="!isAlways"
        class="closeBtn"
        type="link"
        color="danger"
        @click="isShow = onClose ? (onClose() === false) : false;"
      >
        X
      </moButton>
    </div>
    <div
      v-if="$slots.detail"
      :class="`bg-light bg-opacity-100 p-2 text-sm text-${theme}`"
    >
      <slot name="detail" />
    </div>
    <div
      v-if="type !== 'message'"
      :class="`bg-white bg-opacity-100 p-2 box-border text-sm text-${theme} border-t border-${theme}`"
    >
      <slot name="operator">
        <div
          :class="`operator-box flex justify-end`"
        >
          <moButton
            class="mr-2"
            @click="isShow = onConfirm ? (onConfirm() === false) : false;"
          >
            确认
          </moButton>
          <moButton
            v-if="type === 'confirm'"
            color="danger"
            @click="isShow = onCancel ? (onCancel() === false) : false;"
          >
            取消
          </moButton>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { ref } from "vue";
import moButton from "../buttons/index.vue";
interface Props{
  type?:"alert"|"confirm"|"message",
  theme?:string,
  text:string,
  onClose?:()=>boolean,
  onConfirm?:()=>boolean,
  onCancel?:()=>boolean,
  isAlways?:boolean
}
withDefaults(defineProps<Props>(), {
  type: "message",
  text: "",
  theme: "success",
  onClose: undefined,
  onConfirm: undefined,
  onCancel: undefined,
  isAlways: false
});
const isShow = ref<boolean>(true);
</script>

<style lang="scss" scoped>
.mo-toasts {
  min-width: 300px;
}
</style>
