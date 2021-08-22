<template>
  <div class="container" />
  <TSLR :on-scroll="containerScrollHandler">
    <template #header>
      <nav class="nav">
        <memo />
        <moNavbar
          :value="data"
          :active-item="[2]"
          class="float-right"
        />
      </nav>
    </template>
    <template #side>
      <div class="side-container">
        <left-menu
          :value="menuData"
          :active-item="menuDefaultValue"
        />
      </div>
    </template>
    <template
      #main="{scrollContainer}"
    >
      <div
        class="grid grid-cols-5 main-container pb-4"
      >
        <div class="col-span-4">
          <router-view />
        </div>
        <div
          class="col-span-1 hashNav"
        >
          <moCarouselTilte
            :ref="a"
            :default-actived-item-index="0"
            :scroll-container="scrollContainer"
            :title-container="titleContainer"
          />
        </div>
      </div>
    </template>
  </TSLR>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import { menu } from "./site/menu/index";
import TSLR from "./components/layout/T-SL-R.vue";
import leftMenu from "./components/menu/leftListMenu.vue";
import memo from "./components/colour-text/memo.vue";
import moCarouselTilte from "./components/carousel-tilte/index.vue";
import moNavbar from "./components/navbar/index.vue";

export default {
  components: {
    TSLR,
    leftMenu,
    memo,
    moCarouselTilte
  },
  mounted() {
    let timer:any = null;
    this.$router.afterEach(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.titleContainer = document.querySelector<HTMLElement>(".markdown-body");
      }, 100);
    });
  },
  methods: {
    a(el:any) {
      this.containerScrollHandler = el.containerScrollHandler;
    }
  }
};
</script>

<script setup lang="ts">
//! 这里是在create之前执行，是需要app mount之后执行 所以star启动需要app mount之后
const menuData = ref([{
  name: "组件",
  children: []
}]);
const containerScrollHandler = ref(null);
const titleContainer = ref<HTMLElement|null>(null);
const menuDefaultValue = ref([0, 0]);
const data = ref([{
  id: "home",
  name: "首页",
  route: "/"
}, {
  id: "document",
  name: "文档",
  route: "/document"
}, {
  id: "componment",
  name: "组件",
  route: "/componment"
}, {
  id: "log",
  name: "更新日志",
  route: "/log"
}]);
menu(menuData.value[0].children, (v:any) => {
  menuDefaultValue.value = v;
});
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;

  @apply w-full justify-between;
}

.hashNav {
  top: 75px;
  width: 16%;

  @apply fixed p-3 right-0 my-4;
}

</style>
