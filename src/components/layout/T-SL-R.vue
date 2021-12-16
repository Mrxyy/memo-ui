<template>
  <div class="app-container">
    <div class="grid grid-rows-2 grid-rows-layout layout">
      <nav class="col-span-full header">
        <slot name="header" />
      </nav>
      <aside :class="`${$slots.side ? 'side' :''} min-w-max`">
        <slot
          v-if="$slots.side"
          name="side"
        />
      </aside>
      <section
        ref="scrollContainer"
        class="main"
        @scroll="onScroll"
      >
        <slot
          name="main"
          :scrollContainer="scrollContainer"
        />
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { log } from "console";
import { ref } from "vue";
export default {
  beforeCreate() {
    console.log("beforeCreate layout");
  },
  mounted() {
    console.log("mounted layout");
    this.scrollContainer = this.$refs.scrollContainer;
  }
};
</script>

<script setup lang="ts">
console.log("setup layout");
interface Props{
  onScroll?:(e:any)=>any
}
withDefaults(defineProps<Props>(), {
  onScroll: (e) => {}
});

const scrollContainer = ref(null);

</script>

<style lang="scss" scoped>
.app-container > .layout {
  grid-template-columns: max-content 1fr;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .header {
    border-bottom: 1px solid theme('colors.border');
  }

  .side {
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;
    border-right: 1px solid theme('colors.border');

    &::-webkit-scrollbar-thumb {
      display: none;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .main {
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;
  }
}
</style>
