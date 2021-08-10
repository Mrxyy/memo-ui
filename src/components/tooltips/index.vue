<template>
  <div
    :class="`mo-tooltips inline-block dirrection-${dirrection}`"
    :data-title="tipText"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Props{
  tipText:string
  dirrection:"top"|"bottom"|"left"|"right"
  defaultshow:string,
  triggerEvent:string
}

withDefaults(defineProps<Props>(), {
  tipText: "",
  dirrection: "right",
  defaultshow: "none",
  triggerEvent: "hover"
});
</script>

<style lang="scss" scoped>
.mo-tooltips {

  @apply relative;

  &.dirrection-top {

    &::before {
      top: -6px;

      @apply -translate-y-full;

      @apply left-1/2 -translate-x-1/2;
    }

    &::after {
      top: -6px;
      border-top-color: theme('colors.primary');

      @apply left-1/2 -translate-x-1/2;
    }
  }

  &.dirrection-bottom {

    &::before {
      bottom: -6px;

      @apply translate-y-full;

      @apply left-1/2 -translate-x-1/2;
    }

    &::after {
      bottom: -6px;
      border-bottom-color: theme('colors.primary');

      @apply left-1/2 -translate-x-1/2;
    }
  }

  &.dirrection-left {

    &::before {
      left: -6px;

      @apply top-1/2 -translate-y-1/2 -translate-x-full;
    }

    &::after {
      left: -6px;
      border-left-color: theme('colors.primary');

      @apply top-1/2 -translate-y-1/2 ;
    }
  }

  &.dirrection-right {

    &::before {
      right: -6px;

      @apply top-1/2 -translate-y-1/2 translate-x-full;
    }

    &::after {
      right: -6px;
      border-right-color: theme('colors.primary');

      @apply top-1/2 -translate-y-1/2 ;
    }
  }

  &::before {
    display: v-bind(defaultshow);
    content: attr(data-title);

    @apply absolute border-transparent border bg-primary text-white text-xs p-1 rounded shadow-sm transform z-50;
  }

  &::after {
    display: v-bind(defaultshow);

    @apply absolute border-transparent m-auto transform z-50;

    border-width: 6px;
    content: '';
  }

  &:hover {

    &::after,
    &::before {

      @apply block;
    }
  }
}
</style>
