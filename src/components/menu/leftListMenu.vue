<template>
  <div class="left-list-menu flex flex-col p-2">
    <div
      v-for="(v, i) in data"
      :id="v.id"
      :key="v.name"
      :index="i"
    >
      <div
        :class="{
          [v.children
            ? 'font-medium text-gl'
            : 'click-item text-sm']: true,
          'items-center flex': true,
          'text-dark': v.expand,
          active: currentActive === v,
        }"
        @click="switchExpand(v)"
      >
        <i
          v-if="v.children"
          :class="`bi ${v.expand ? ' bi-chevron-down' : 'bi-chevron-right'
          } text-sm m-2`"
        />
        <i
          v-else
          :class="`bi bi-file-earmark-post text-sm m-2`"
        />
        <template v-if="v.route">
          <router-link :to="v.route">
            {{ v.name }}
          </router-link>
        </template>
        <div v-else>
          {{ v.name }}
        </div>
      </div>
      <LeftListMenu
        v-show="v.expand"
        v-if="v.children?.length"
        :active-item="currentActive"
        :value="v.children"
        :file-open-handler="fileOpenHandler"
        :directory-open-handler="directoryOpenHandler"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { getCurrentInstance, inject, provide, ref, watch } from "vue";
import { START_LOCATION } from "vue-router";
// https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md#declaring-additional-options
// ? 必须写在setup之前
export default {
  name: "LeftListMenu"
};
</script>

<script setup lang="ts">
interface menuItem {
  name: string;
  children?: menuItem[];
  id?: string;
  expand?: boolean;
  route?: any | string;
  handler?: (v?: menuItem) => any
}
interface Props {
  value: menuItem[];
  activeItem: number[] | menuItem;
  directoryOpenHandler?: (v: menuItem) => any;
  fileOpenHandler?: (v: menuItem) => any;
}
const props = withDefaults(defineProps<Props>(), {
  value() {
    return [];
  },
  activeItem() {
    return [];
  },
  directoryOpenHandler: undefined,
  fileOpenHandler: undefined
});
const data = ref(props.value);

// data is mirrir of value，so we should transform for it，sure data Coherence

// props.activeItem第一个root是number[],其他是Route
const getCurrentActive = () =>
  Array.isArray(props.activeItem)
    ? props.activeItem.reduce((a: menuItem[] | any, b: number) => {
      const v = a[b];
      if (v && v.children) {
        v.expand = true;
      }
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

watch(
  () => props.activeItem,
  (n: any) => {
    currentActive.value = getCurrentActive();
  }
);

//! watch lenght不行是因为getCurrentActive函数是为root的vaule设计的
// watch(() => props.value.length, (n, o) => {
//   console.log(props.value, n, o);
//   if (Array.isArray(currentActive.value)) {
//     currentActive.value = getCurrentActive();
//     console.log(currentActive.value);
//   }
// });

// 读取inject值，没有取
const isRoot = !inject("currentActive");

const currentActive = inject("currentActive", ref(initActive));

const app:any = getCurrentInstance();
watch(currentActive, (n: menuItem) => {
  if (isRoot) {
    n.route && app.appContext.config.globalProperties?.$router.push(n.route);
    Reflect.set(window, "hashBash", undefined);
  }
});

defineExpose({
  currentActive,
  isRoot
});

function switchExpand(v: menuItem) {
  v.handler && v.handler();
  if (v.children) {
    // directory
    v.expand = !v.expand;
    props.directoryOpenHandler && props.directoryOpenHandler(v);
  } else {
    // file
    props.fileOpenHandler && props.fileOpenHandler(v);
    currentActive.value = v;
  }
}

provide("currentActive", currentActive);
</script>
