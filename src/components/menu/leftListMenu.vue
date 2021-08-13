<template>
  <div class="left-list-menu flex flex-col p-2 ">
    <div
      v-for="v ,i in data"
      :id="v.id"
      :key="v.name"
      :index="i"
    >
      <div
        :class="{[v.children?.length?'font-medium text-gl':'click-item text-sm']:true,'items-center flex':true,'text-dark':v.expand,'active':currentActive === v}"
        @click="switchExpand(v)"
      >
        <i
          v-if="v.children?.length"
          :class="`bi ${v.expand ? ' bi-chevron-down' : 'bi-chevron-right'} text-sm m-2`"
        />
        <i
          v-else
          :class="`bi bi-file-earmark-post text-sm m-2`"
        />
        <router-link
          v-if="v.route"
          :to="v.route"
        >
          {{ v.name }}
        </router-link>
        <div v-else>
          {{ v.name }}
        </div>
      </div>
      <LeftListMenu
        v-show="v.expand"
        v-if="v.children"
        :active-item="currentActive"
        :value="v.children"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { inject, provide, ref, watch } from "vue";
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#declaring-additional-options
// ? 必须写在setup之前
export default {
  name: "LeftListMenu",
  watch: {
    currentActive(n:menuItem) {
      n.route && this.$router && this.$router.push(n.route);
    }
  },
  methods: {
    switchExpand(v:menuItem) {
      if (v.children) {
        v.expand = !v.expand;
      } else {
        this.currentActive = v;
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

//! watch lenght不行是因为getCurrentActive函数是为root的vaule设计的
// watch(() => props.value.length, (n, o) => {
//   console.log(props.value, n, o);
//   if (Array.isArray(currentActive.value)) {
//     currentActive.value = getCurrentActive();
//     console.log(currentActive.value);
//   }
// });

const currentActive = inject("currentActive", ref(initActive));

// 读取inject值，没有取
provide("currentActive", currentActive);

</script>
