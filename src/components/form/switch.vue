<template>
  <div
    :class="`mo-switch ${activeItem[0]} border rounded-full border-border px-2 flex items-center justify-center`"
    @click="switchHandler"
  >
    <span class="mx-1">{{ activeItem[1].label }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";

type valueItem = {
  value:string,
  label:string,
}

interface Props{
  data:{
    enable:valueItem
    disable:valueItem
  },
  defaultStatus:"enable"|"disable"
  onChange?:(value:valueItem)=>any
  size:"small"|"medium"|"large"
}

const props = withDefaults(defineProps<Props>(), {
  onChange: undefined,
  data: undefined,
  defaultStatus: "disable",
  size: "medium"
});

const { data, defaultStatus, onChange, size } = props;

const switchHandler = () => {
  const nextStatus = activeItem.value[0] === "enable" ? "disable" : "enable";
  activeItem.value = [nextStatus, data[nextStatus]];
};

const activeItem = ref([defaultStatus, data[defaultStatus]]);

const { width, height, font_size } = computed(() => {
  switch (props.size) {
    case "small":
      return { width: "65px", height: "20px", font_size: "0.8rem" };
    case "large":
      return { width: "95px", height: "40px", font_size: "1.2rem" };
    default:
      return { width: "80px", height: "30px", font_size: "1rem" };
  }
}).value;

watch(activeItem, (newVal:valueItem) => {
  onChange && onChange(newVal);
});

</script>

<style lang="scss" scoped>
.mo-switch {
  width: v-bind(width);
  height: v-bind(height);
  font-size: v-bind(font_size);

  @apply text-primary text-opacity-80 cursor-pointer hover:text-opacity-100 border-b;

  &::before {
    width: 20%;
    height: 0;
    padding-bottom: 20%;
    content: '';

    @apply border border-border block rounded-full shadow bg-primary box-content;
  }

  &.enable {

    @apply bg-primary text-white;

    &::before {
      order: 2;

      @apply bg-current;
    }
  }
}
</style>
