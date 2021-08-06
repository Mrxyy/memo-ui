<template>
  <div :class="`inline-block ${colorOptions} ${isBubbleOptions} ${typeOption}`">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
export enum BadgeType{
  TEXT="TEXT",
  DOT="DOT",
  ELLIPSE="ELLIPSE"
}
</script>

<script lang="ts" setup>

interface Props{
  color?:string
  textColor?:string
  type?:BadgeType
  isBubble?:boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: "secondary",
  type: BadgeType.TEXT,
  isBubble: false,
  textColor: "white"
});
const { color, textColor, type, isBubble } = props;

const colorOptions = computed(() => {
  return `mx-1 bg-${color} text-${textColor}`;
});

const typeOption = computed(() => type === BadgeType.TEXT ? "rounded py-1 px-2" : `rounded-full py-${type === BadgeType.DOT ? 2 : 1} px-2 ${BadgeType.DOT ? "border border-" + textColor : ""}`);

const isBubbleOptions = computed(() => isBubble && `absolute -top-3 -right-3`);

</script>
