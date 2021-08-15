<template>
  <div
    ref="loading"
    :data-title="text"
    :class="`mo-loading inline-block text-center ${mode === 'loading'? 'absolute left-0 top-0':''} text-${color}`"
  >
    <div
      v-if="type == 'cirle'"
      :class="`mo-loading-cirle animate-spin border-${color}`"
    />
    <div
      v-if="type == 'dot'"
      class="mo-loading-dot inline-block"
    >
      <span
        v-for="i in 5"
        :key="i"
        :style="{'animation-delay':i*80 + 'ms',transform:`scale(${i*1}/20)`}"
        :class="`animate-ping bg-${color}`"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted, ref } from "vue";

interface Props{
  type?:"cirle" | "dot"
  mode?:"icon" | "loading"
  color?:string
  text?:string
  theme?:string
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  mode: "icon",
  type: "cirle",
  text: "",
  theme: "auto"
});

const containerWidth = ref<any>("max-content");
const containerHeight = ref<any>("max-content");
const containerBgc = ref<any>("unset");

onMounted(() => {
  const { mode } = props;
  if (mode === "loading") {
    const parentNode = (getCurrentInstance() as any).refs.loading.parentNode;
    const parentStyle = getComputedStyle(parentNode);
    containerWidth.value = parentStyle.getPropertyValue("width");
    containerHeight.value = parentStyle.getPropertyValue("height");
    containerBgc.value = props.theme ?? "rgb" + parentStyle.getPropertyValue("background-color").match(/\(\d{1,3},\s\d{1,3},\s\d{1,3}/g)?.[0] + ")";
    //  "white" : parentStyle.getPropertyValue("background-color");
    if (parentStyle.getPropertyValue("position") === "static") {
      parentNode.style.position = "relative";
    }
  }
});

</script>

<style lang="scss" scoped>
.mo-loading {
  width: v-bind('containerWidth');
  height: v-bind('containerHeight');
  line-height: v-bind('containerHeight');
  background-color: v-bind('containerBgc');

  &::after {
    vertical-align: sub;
    content: attr(data-title);

    @apply text-xs mx-2;
  }

  >div {

    @apply align-middle;
  }

  .mo-loading-cirle {

    @apply w-8 h-8 rounded-full inline-block border-4 mx-1 align-middle;

    border-right-color: transparent;
  }

  .mo-loading-dot {

    >span {

      @apply w-1.5 h-1.5 rounded-full inline-block mx-1 inline-flex;
    }
  }
}
</style>
