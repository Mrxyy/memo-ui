<template>
  <div
    :class="`mo-radio relative` "
  >
    <moInput
      name="a"
      type="radio"
      class="appearance-none"
    />
  </div>
</template>

<script lang="ts" setup>
import moInput from "./input.vue";
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
