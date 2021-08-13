<template>
  <div :class="`inline-flex ${disable && 'cursor-not-allowed'}`">
    <button
      :class="`${sizeOption} ${ round ? '':'!rounded-none'}  hover:ring-opacity-50  ${typeOption} ${disable && 'pointer-events-none opacity-80'}`"
      @click="onclick&&onclick()"
      @submit="submit&&onsubmit()"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props{
  color?:string
  size?:"small" | "medium" | "larger"
  type?:"fill" | "link" | "outline"
  disable?:boolean
  round?:boolean
  onclick?:()=>any
  onsubmit?:()=>any
}
const { color, size, type } = withDefaults(defineProps<Props>(), {
  color: "primary",
  size: "medium",
  type: "fill",
  disable: false,
  round: true
});

const sizeOption = computed(() => {
  switch (size) {
    case "small":return "text-sm py-1 px-2.5 rounded";
    case "larger":return "text-lg py-2 px-3.5 rounded-lg";
    default:return "text-base py-1.5 px-3 rounded-md";
  }
});

const typeOption = computed(() => {
  switch (type) {
    case "link":return `text-${color} hover:ring-0 hover:underline`;
    case "outline":return `border-${color} border text-${color} hover:ring-${color} hover:bg-${color} hover:text-white  hover:ring`;
    default:return `bg-${color} text-white hover:ring-${color}  bg-opacity-90  hover:bg-opacity-100 hover:ring`;
  }
});

</script>
