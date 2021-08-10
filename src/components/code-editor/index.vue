<template>
  <div class="code-compile-box box-content border-solid rounded-sm border-2 border-primary p-2 mx-2 mb-4">
    <component
      :is="mk"
    />
  </div>
  <v-md-editor
    ref="mk"
    v-model="text"
    mode="edit"
    left-toolbar="undo redo clear save"
    right-toolbar="edit  sync-scroll fullscreen"
    :toolbar="toolbar"
    @save="save"
  />
</template>

<script lang="ts">
import { defineComponent, ref, defineAsyncComponent, markRaw } from "vue";
interface DataDefind {
  mk:any,
  codemirror:any,
  text:string,
  isEdit:boolean,
  toolbar:{
    edit:{
      icon:string,
      title:string,
      active:(editor:DataDefind)=>boolean,
      action:(editor:any)=>any
    }
  }
}

const active = ref<boolean>(false);

export default defineComponent({
  props: {
    value: {
      type: String,
      default: `<template>
  <div class="banner">
    <div
      class="text-magic"
      :data-word="text"
    >
      <span
        class="text-box"
        v-text="text"
      />
      <div class="white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { withDefaults, defineProps } from "vue";
// https://github.com/vuejs/rfcs/pull/227
import colors from "tailwindcss/colors";

interface Props{
  text?: string
  bg?: string
  color?:string
  shadow?:string
}

withDefaults(defineProps<Props>(), {
  text: "memo",
  bg: colors.emerald[500],
  color: colors.amber[400],
  shadow: colors.orange[200]
});
<\/script>

<style lang="scss" scoped>
.banner {
  display: inline-block;
  padding: 2px 10px;
  // https://github.com/vuejs/rfcs/pull/231
  // color: v-bind(bannerURL);
  background: v-bind(bg);

  .text-magic {
    position: relative;
    display: inline-block;
    font-size: 20px;
    font-family: Raleway, Verdana, Arial;
    white-space: nowrap;
    color: transparent;

    .text-box {
      opacity: 0;
    }

    &::before,
    &::after {
      position: absolute;
      top: 0;
      overflow: hidden;
      filter: contrast(200%);
      content: attr(data-word);
    }

    &::before {
      z-index: 2;
      left: 0;
      text-shadow: 1px 0 0 v-bind(shadow);
      color: v-bind(color);
      animation: move 0.95s infinite;
    }

    &::after {
      z-index: 3;
      left: -1px;
      text-shadow: -1px 0 0 v-bind(color);
      color: v-bind(color);
      animation: move 1.1s infinite 0.2s;
      mix-blend-mode: lighten;
    }

    .white {
      position: absolute;
      z-index: 4;
      left: -10px;
      right: -10px;
      width: 100%;
      height: 1px;
      margin: auto;
      background: v-bind(bg);
      animation: whiteMove 10s ease-out infinite;
    }
  }
}

@keyframes whiteMove {

  9% {
    top: calc(100% - 7px);
  }

  14% {
    top: 8px;
  }

  18% {
    top: 100%;
  }

  22% {
    top: 1px;
  }

  32% {
    top: calc(100% - 11px);
  }

  34% {
    top: 12px;
  }

  40% {
    top: calc(50%);
  }

  43% {
    top: 7px;
  }

  99% {
    top: calc(100% - 10px);
  }
}

@keyframes move {

  10% {
    top: -0.4px;
    left: -1.1px;
  }

  20% {
    top: 0.4px;
    left: -0.2px;
  }

  30% {
    left: 0.5px;
  }

  40% {
    top: -0.3px;
    left: -0.7px;
  }

  50% {
    left: 0.2px;
  }

  60% {
    top: 1.8px;
    left: -1.2px;
  }

  70% {
    top: -1px;
    left: 0.1px;
  }

  80% {
    top: -0.4px;
    left: -0.9px;
  }

  90% {
    left: 1.2px;
  }

  100% {
    left: -1.2px;
  }
}
</style>
`
    },
    filePath: {
      type: String,
      default: "../colour-text"
    }
  },
  data():DataDefind {
    return {
      mk: null,
      text: "",
      codemirror: null,
      isEdit: false,
      toolbar: {
        edit: {
          icon: "bi bi-code",
          title: "编辑",
          active: (editor:DataDefind) => active.value,
          action: () => {
            // toolbar点击时触发的函数
            this.canEdit(true);
          }
        }
      }
    };
  },
  mounted() {
    const mk:any = this.$refs.mk;
    this.text = this.value;
    this.requestRender();
    this.codemirror = mk.codemirrorInstance;
    this.canEdit();
  },
  methods: {
    canEdit(flag = false):void {
      active.value = flag;
      // @param nocursor
      this.codemirror.setOption("readOnly", !flag);
    },
    async requestRender(vueFile?:string):Promise<any> {
      // console.log(await import("../colour-text/mk"));
      this.mk = markRaw(defineAsyncComponent(() => import(/* @vite-ignore */`${this.filePath}/mk=${encodeURI(this.text).replaceAll("#", "!--@")}`)));
    },
    save(text:string) {
      this.requestRender();
      this.canEdit();
    }
  }
});
</script>
