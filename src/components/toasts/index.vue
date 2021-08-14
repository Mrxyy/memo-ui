<template>
  <div class="mo-toasts">
    <template v-if="type === 'alert' ">
      <div :class="`flex`">
        <div class="text" />
        <moButton class="closeBtn">
          X
        </moButton>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import moButton from "../buttons/index.vue";
interface Props{
  type:"alert"|"comfirm"|"message",
  theme:string
}
withDefaults(defineProps<Props>(), {
  type: "alert",
  theme: "success"
});
</script>
