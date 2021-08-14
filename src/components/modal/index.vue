<template>
  <div
    v-if="isShow"
    :class="`mo-madal mo-madal-${type}  fixed w-screen h-screen bg-black top-0 left-0 z-50 bg-opacity-40`"
    @click.self="isShow = isCoverClose ? false : isShow"
  >
    <moCard
      :class=" `mo-madal-entity mo-madal-entity`"
      :width="`${width}`"
      :height="`${type === 'silde' ? '100%':height}`"
      padding="0"
    >
      <div class="mo-madal-header flex items-center justify-between border-b border-border">
        <slot name="header">
          <div class="title">
            {{ title }}
          </div>
          <div class="close-btn">
            <moButton
              type="outline"
              color="danger"
              size="small"
              @click="isShow = false"
            >
              X
            </moButton>
          </div>
        </slot>
      </div>
      <div class="mo-madal-body h-full overflow-auto">
        <slot />
      </div>
      <div class="mo-madal-footer flex justify-end border-t border-border">
        <slot name="footer">
          <moButton
            class="confirm-btn mr-4"
            size="small"
          >
            确认
          </moButton>
          <moButton
            class="cancal-btn"
            size="small"
            color="danger"
            @click="cancalHandler"
          >
            取消
          </moButton>
        </slot>
      </div>
    </moCard>
  </div>
</template>

<script lang="ts">
import moButton from "../buttons/index.vue";
import moCard from "../card/index.vue";
import { ref, getCurrentInstance, withDefaults, defineProps } from "vue";
interface Props{
  isCoverClose?:boolean,
  title:string,
  type:"alert"|"silde",
  onClose?:()=>boolean,
  onComfirm?:()=>boolean,
  height:string,
  width:string
}

const defaultProps = {
  title: "",
  onClose: undefined,
  isCoverClose: false,
  onComfirm: undefined,
  type: "alert",
  width: "500px",
  height: "500px"
};

export default {
  components: {
    moCard,
    moButton
  },
  props: {
    title: {
      require: true,
      type: String,
      default: ""
    },
    onClose: {
      require: true,
      type: Object,
      default: undefined
    },
    onComfirm: {
      require: true,
      type: Object,
      default: undefined

    },
    isCoverClose: {
      require: false,
      type: Boolean,
      default: false
    },
    type: {
      require: false,
      type: String,
      default: "alert"
    },
    width: {
      require: false,
      type: String,
      default: "500px"
    },
    height: {
      require: false,
      type: String,
      default: "500px"
    }
  },
  setup() {
    const isShow = ref<boolean>(false);
    return {
      isShow
    };
  },
  methods: {
    switchShow(flag?:boolean) {
      this.isShow = flag != undefined ? flag : !this.isShow;
    },
    cancalHandler () {
      this.switchShow(this.onClose && !!this.onClose());
    },
    confirmHandler  () {
      this.switchShow(this.onComfirm && !!this.onComfirm());
    }
  }
};
</script>

<style lang="scss" scoped>
.mo-madal {

  @apply flex justify-center items-center content-center;

  &.mo-madal-silde {

    @apply justify-end;

    .mo-madal-entity {

      @apply rounded-none;

      animation: sildeRight 0.4s linear;

      @keyframes sildeRight {

        0% {
          overflow: hidden;
          transform: translateX(100%);
        }

        100% {
          overflow: hidden;
          transform: translateX(0%);
        }
      }
    }
  }

  .mo-madal-entity {

    @apply bg-light flex flex-col justify-between rounded-lg;

    >div {

      @apply p-4;

      &.mo-madal-header {

        .title {

          @apply text-lg font-normal tracking-wider;
        }
      }
    }
  }
}

</style>
