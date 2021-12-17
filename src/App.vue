<template>
  <TSLR :on-scroll="containerScrollHandler">
    <template #header>
      <nav class="nav">
        <memo />
        <moNavbar
          ref="navbar"
          :value="navData"
          :active-item="navbarActiveItem"
          class="float-right"
        />
      </nav>
    </template>
    <template #side>
      <div
        v-if="isShowNavbar"
        class="side-container"
      >
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
        <div :class="`col-span-${isShowNavbar?4:5}`">
          <router-view />
        </div>
        <div
          class="col-span-1 hashNav"
        >
          <moCarouselTilte
            v-show="isShowNavbar || isShowDocument"
            :ref="scrollInstance"
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
    moNavbar,
    memo,
    moCarouselTilte
  },
  data() {
    return {
      containerScrollHandler: null,
      titleContainer: null,
      navData: [{
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
      }]
    };
  },
  computed: {
    navbarActiveItem():Array<number> {
      let index = 0;
      this.navData.map(({ route }, i) => {
        index = new RegExp("^" + route, "g").test(this.$route.path) ? i : index;
      });
      return [index];
    },
    isShowNavbar():boolean {
      return /^(\/componment)/g.test(this.$route.path);
    },
    isShowDocument():boolean {
      return /^(\/document)/g.test(this.$route.path);
    }
  },
  beforeCreate() {
    console.log("created before");
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mount");
    let timer:any = null;
    this.$router.afterEach(() => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.titleContainer = document.querySelector<HTMLElement>(".markdown-body");
      }, 100);
    });
  },
  methods: {
    // ref 介绍一个函数
    scrollInstance(el:any) {
      this.containerScrollHandler = el.containerScrollHandler;
    }
  }
};
</script>

<script setup lang="ts">
//! 这里是在create之前执行，是需要app mount之后执行 所以star启动需要app mount之后
console.log("setup");
const menuData = ref([{
  name: "组件",
  children: []
}]);
const menuDefaultValue = ref([0, 0]);
menu(menuData.value[0].children, (v:any) => {
  console.log(v);
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
