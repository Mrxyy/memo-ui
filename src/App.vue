<template>
  <div class="container" />
  <TSLR>
    <template #header>
      <nav class="nav">
        <memo />
      </nav>
    </template>
    <template #side>
      <div class="side-container">
        <left-menu
          :value="menuData"
          :active-item="[0,0]"
        />
      </div>
    </template>
    <template #main>
      <div class="main-container">
        <router-view />
      </div>
    </template>
  </TSLR>
</template>

<script lang="ts">
import { ref } from "vue";
import { menu } from "./site/menu/index";
import TSLR from "./components/laout/T-SL-R.vue";
import leftMenu from "./components/menu/leftListMenu.vue";
import memo from "./components/colour-text/memo.vue";
export default {
  components: {
    TSLR,
    leftMenu,
    memo
  }
};
</script>

<script setup lang="ts">
//! 这里是在create之前执行，是需要app mount之后执行 所以star启动需要app mount之后
const menuData = ref([{
  name: "组件",
  children: []
}]);
console.log(menuData.value[0].children);

menu(menuData.value[0].children);
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
}

.main-container {
  padding: 20px 10px 40px;
}
</style>
