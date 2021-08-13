<template>
  <div class="mo-list-group">
    <moCard padding="0">
      <div
        v-for="v,i in dataMirror"
        :key="i"
        :class="`mo-list-item relative list-none ${v.iconClass} ${listItemClass}`"
      >
        <div :class="`flex contents-center items-center ${listItemClass && 'title-box'}`">
          <moCheckbox
            v-if="showCkecked"
            class="mr-2"
            :checked="v.ckeackAble"
            :name="i"
          />
          <slot :value="v">
            {{ v.text }}
          </slot>

          <slot
            name="operation"
            :value="v"
          >
            <moTip
              :tip-text="`${v.isExpand?'收起':'展开'}`"
              dirrection="left"
              class="!absolute right-4"
            >
              <moButton
                v-if="!$slots.operation"
                size="small"
                type="link"
                @click="v.isExpand = !v.isExpand"
              >
                <i
                  :class="`bi bi-chevron-${'right'} ${v.isExpand && 'rotate-90' } inline-block transform transition-all divide-purple-200`"
                />
              </moButton>
            </moTip>
          </slot>
        </div>
        <div
          v-show="v.isExpand"
          class="child-box p-2"
        >
          <slot
            name="detailsContent"
            :value="v"
          />
        </div>
      </div>
    </moCard>
  </div>
</template>

<script lang="ts">
import moCard from "../card/index.vue";
import moCheckbox from "../form/checkbox.vue";
import moButton from "../buttons/index.vue";
import moTip from "@components/tooltips/index.vue";
import { ref } from "vue";

export enum operationType{
  EXPAND="expand",
}
</script>

<script setup lang="ts">
interface listItem{
  text:string,
  operation?:operationType,
  ckeckAble:boolean,
  iconClass?:string
  isExpand:boolean,
}
interface Props {
  data:listItem[],
  showCkecked?:boolean
  listItemClass?:string
}
const { data } = withDefaults(defineProps<Props>(), {
  data() {
    return [{
      text: "第一个",
      operation: operationType.EXPAND,
      ckeackAble: true,
      isExpand: true
    }, {
      text: "第二个",
      operation: operationType.EXPAND,
      ckeackAble: true,
      isExpand: true
    }];
  },
  showCkecked: false,
  listItemClass: ""
});

const dataMirror = ref(data);

</script>

<style lang="scss" scoped>
.mo-list-group {

  .mo-list-item {
    display: list-item;

    @apply leading-10 border-b border-border p-2 px-4 list-inside;

    &:last-child {

      @apply border-none;
    }

    &::marker {

      @apply absolute;
    }

    .title-box {

      @apply inline-flex;
    }
  }
}
</style>
