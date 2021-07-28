<template>
  <div class="app-container">
    <div class="grid grid-cols-5 grid-rows-2  grid-rows-layout layout">
      <nav class="col-span-5 header">
        <slot name="header" />
      </nav>
      <aside class="col-span-1 side">
        <slot name="side" />
      </aside>
      <section class="col-span-4 main">
        <slot name="main" />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">

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
  }

  .main {
    overflow-x: hidden;
    overflow-y: scroll;
    overflow-y: overlay;
  }
}
</style>
