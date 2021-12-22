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
      default: ``
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
      this.mk = markRaw(defineAsyncComponent(() => import(/* @vite-ignore */`${this.filePath}/mk=${encodeURI(this.text).replace(/#/g, "!--@")}`)));
    },
    save(text:string) {
      this.requestRender();
      this.canEdit();
    }
  }
});
</script>
