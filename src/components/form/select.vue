<template>
  <div :class="`inline-flex type-${type} relative mo-select`">
    <template v-if="type === 'datalist'">
      <moInput
        list="datalist"
        :name="name"
        multiple="multiple"
        :value="activeItem?.label"
        class="w-full"
      />
      <datalist
        id="datalist"
      >
        <option
          v-for="v in data"
          :key="v.value"
          :value="v.value"
        >
          {{ v.active && activeItemChange(v) }}
          {{ v.label }}
        </option>
      </datalist>
    </template>
    <template v-if="type === 'default'">
      <select
        :="$attrs"
        :class="`
        appearance-none
        py-2
        px-4
        border
        border-border
        rounded
        outline-none
        w-full
        ${isfocused
        &&
        'ring'}
        ring-primary
        ring-opacity-25`"
        :value="activeItem?.label"
        @focus="isfocused = true"
        @blur="isfocused = false"
        @change="baseOnChangeHandler"
        @input="onInput&&onInput()"
      >
        <option
          v-for="v in data"
          :key="v.value"
          :value="v.value"
        >
          {{ v.active && activeItemChange(v) }}
          {{ v.label }}
        </option>
      </select>
    </template>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import moInput from "./input.vue";

export enum SelectType{
  DATALIST = "datalist",
  DEFAULT = "default"
}

export default {
  components: {
    moInput
  },
  inheritAttrs: false
};
</script>

<script lang="ts" setup>

interface DataItem{
  value:string
  label:string
  [key:string]:any
  active?:boolean
}

interface eventHandler{
  (value?:DataItem, e?:any):any
}

interface Props{
  data?:DataItem[]
  name?:string
  type?:SelectType
  width?:string
  height?:string
  onChange?:eventHandler
  onInput?:eventHandler
}

const props = withDefaults(defineProps<Props>(), {
  data() {
    return [{
      value: "item-1",
      label: "item-1"
    }, {
      value: "item-2",
      label: "item-2",
      active: true

    }];
  },
  name: "",
  type: SelectType.DEFAULT,
  width: "auto",
  height: "auto",
  onChange: undefined,
  onInput: undefined
});

const { data, onChange } = props;

const activeItem = ref<DataItem>();

const activeItemChange = (value:DataItem) => {
  activeItem.value = value;
};

const baseOnChangeHandler = (e:any) => {
  activeItem?.value && (activeItem.value.active = false);
  data[e.target.selectedIndex].active = true;
  onChange && onChange(data[e.target.selectedIndex], e);
};

const isfocused = ref(false);
</script>

<style lang="scss" scoped>
.mo-select {
  width: v-bind(width);
  height: v-bind(height);
}

.type-default {

  &::before {

    @apply block w-0 h-0 border-4 border-dark absolute inset-y-0 m-auto;

    right: 5%;
    border-right-color: transparent;
    border-bottom: none;
    border-left-color: transparent;
    content: '';
  }
}
</style>
