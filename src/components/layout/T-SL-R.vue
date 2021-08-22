<template>
  <div class="app-container">
    <div class="grid grid-cols-5 grid-rows-2  grid-rows-layout layout">
      <nav class="col-span-5 header">
        <slot name="header" />
      </nav>
      <aside class="col-span-1 side">
        <slot name="side" />
      </aside>
      <section
        ref="scrollContainer"
        class="col-span-4 main"
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
import { ref } from "vue";
export default {
  mounted() {
    this.scrollContainer = this.$refs.scrollContainer;
  }
};
</script>

<script setup lang="ts">
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
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .header {
    border-bottom: 1px solid theme('colors.border');
  }

  .side {
    border-right: 1px solid theme('colors.border');
    overflow-x: hidden;
    overflow-y: overlay;
    scroll-behavior: smooth;

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
