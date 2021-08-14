<template>
  <div class="mo-tabs">
    <moCard
      :class="`flex ${direction === 'row' ? 'flex-col' : 'flex-row'}`"
      padding="0"
    >
      <article :class="`tabs-Title grid ${direction === 'row' ? ' grid-flow-col border-b' : ' grid-flow-row border-r'} auto-cols-max justify-between py-2 px-4 border-border`">
        <div
          v-for="v,i in tabs"
          :key="v.id"
          class="relative tab-item flex justify-center"
        >
          <moButton
            size="small"
            :color="`${v.id === activeId?'primary': activeType === 'fill' ? 'white' : 'black'}`"
            :class="`${v.id === activeId && direction === 'row' && activeType === 'tab' ? 'tab-avtive' : ''} m-1`"
            :type="activeType === 'tab'? 'link' : activeType"
            @click="activeId = v.id"
          >
            {{ v.label }}
          </moButton>
        </div>
      </article>
      <article class="content-box py-4 px-8 w-full relative z-10 ">
        <keep-alive>
          <div
            v-for="v in tabs"
            :key="v.id"
          >
            <slot
              v-if="v.id === activeId"
              :key="v.id"
              :name="v.id"
            />
          </div>
        </keep-alive>
      </article>
    </moCard>
  </div>
</template>

<script setup lang="tsx">
import { defineComponent, ref, h } from "vue";
import moCard from "../card/index.vue";
import moButton from "../buttons/index.vue";
interface tabItem{
  id:string | number,
  label:string,
  content?:JSX | string
}

interface Props{
  tabs:tabItem[],
  defaultId?:string|number
  direction?:"column"|"row"
  activeType?:"link" | "fill" | "tab"
}

const { defaultId, tabs } = withDefaults(defineProps<Props>(), {
  tabs() {
    return [];
  },
  defaultId: 1,
  direction: "row",
  activeType: "fill"
});

const activeId = ref(defaultId === undefined ? tabs[0].id : defaultId);

</script>

<style lang="scss" scoped>
.mo-tabs {

  .tab-avtive {

    &::after {

      @apply absolute w-full top-full border-l border-r border-border h-3 z-10 box-content;

      left: -1px;
      border-bottom: 1px #fff solid;
      content: '';
    }

    @apply border border-border  rounded-t-md  border-b-0 bg-white relative;
  }
}

</style>
