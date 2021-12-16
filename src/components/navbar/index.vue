<template>
  <div class="mo-navbar flex">
    <div
      v-for="v ,i in data"
      :id="v.id"
      :key="v.name"
      :class="`${isRoot? 'px-4' : ''} relative p-2 cursor-pointer`"
      :index="i"
      @mouseleave="switchExpand(v,false)"
    >
      <div
        :class="{['click-item text-base']:true,'items-center h-full flex':true,'active':currentActive === v}"
        @click="switchNavbar(v,true)"
        @mouseenter="switchExpand(v,true)"
      >
        <div
          class="w-max"
        >
          {{ v.name }}
        </div>
        <i
          v-if="v.children?.length"
          :class="`bi ${isRoot ? 'bi-caret-down-fill' : 'bi-caret-right-fill'} text-xs m-2`"
        />
      </div>
      <Navbar
        v-show="v.expand"
        v-if="v.children"
        :class="`absolute flex-col ${isRoot? '':'left-full top-1/4'} border rounded border-border border-opacity-20 bg-white`"
        :active-item="currentActive"
        :value="v.children"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { inject, provide, ref, watch } from "vue";
import { START_LOCATION } from "vue-router";
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#declaring-additional-options
// ? 必须写在setup之前
export default {
  name: "Navbar",
  watch: {
    currentActive(n:menuItem) {
      if (this.isRoot) {
        n.route && this.$router && this.$router.push(n.route);
      }
    }
  },
  methods: {
    switchNavbar(v:menuItem, flag?:boolean) {
      if (!v.children) {
        this.currentActive = v;
      }
    },
    switchExpand(v:menuItem, flag?:boolean) {
      if (v.children) {
        v.expand = flag === undefined ? !v.expand : flag;
      }
    }
  }
};
</script>

<script setup lang="ts">
interface menuItem{
  name:string,
  children?:menuItem[],
  id?:string,
  expand?:boolean,
  route?:any|string
}
interface Props{
  value: menuItem[],
  activeItem:number[] | menuItem
}
const props = withDefaults(defineProps<Props>(), {
  value () {
    return [];
  }
});
const data = ref(props.value);

// data is mirrir of value，so we should transform for it，sure data Coherence

// props.activeItem第一个root是number[],其他是Route
const getCurrentActive = () => Array.isArray(props.activeItem)
  ? props.activeItem.reduce((a:menuItem[] | any, b:number) => {
    const v = a[b];
    if (v && v.children) { v.expand = true; }
    return v ? v.children ?? v : props.activeItem;
  }, props.value)
  : props.activeItem;

const initActive = getCurrentActive();

//! 用于menu 异步添加数据，重新设置初始激活
watch(data.value, () => {
  if (Array.isArray(currentActive.value)) {
    currentActive.value = getCurrentActive();
  }
});

watch(() => props.activeItem, (n:any) => {
  currentActive.value = getCurrentActive();
});
// 读取inject值，没有取
const isRoot = !inject("currentActive");

const currentActive = inject("currentActive", ref(initActive));

provide("currentActive", currentActive);
</script>
