<template>
  <div class="mo-carousel-tilte">
    <div
      v-for="v,i in titleArr"
      :key="v.id"
    >
      <a
        :class="`text-primary text-opacity-60 hover:text-opacity-100 p-2 ${ i == activedItemIndex ? '!text-opacity-100' : ''}`"
        :tag="v.id.slice(-2)"
        :style="{'font-size':`${(1.5 - v.id.slice(-1)*0.2)}rem`,'margin-left':`${v.id.slice(-1)*10}px`}"
        @click="hashNavItemHandler(i)"
      >{{ v.innerText }}</a>
    </div>
  </div>
</template>

<script lang="ts">
interface DataType{
  titleArr:any[]
  activedItemIndex:number
  markdownBody:HTMLElement | null
}
export default {
  props: {
    scrollContainer: {
      type: HTMLElement,
      default: null
    },
    defaultActivedItemIndex: {
      type: Number,
      require: false,
      default: 0
    },
    isInit: {
      type: Boolean,
      require: false,
      default: true
    },
    titleContainer: {
      type: HTMLElement,
      default: null
    },
    titleElementTag: {
      type: [Array, String],
      require: false,
      default: () => [">h1", ">h2", ">h3", ">h4", ">h5", ">h6", ">h7"]
    }
  },
  data():DataType {
    return {
      titleArr: [],
      activedItemIndex: this.defaultActivedItemIndex,
      markdownBody: null
    };
  },
  watch: {
    titleContainer: {
      immediate: true,
      handler(this:any) {
        this.init();
      }
    }
  },
  methods: {
    init() {
      this.initHandler();
    },
    initHandler() {
      const mkContainer:HTMLElement|null = this.titleContainer;
      this.markdownBody = mkContainer as HTMLElement;
      const selector:string = typeof this.titleElementTag === "string" ? this.titleElementTag : this.titleElementTag.reduce<string>((count, nextValue) => count + ",.markdown-body " + nextValue, "").slice(1);
      const titleArr = mkContainer?.querySelectorAll(selector);
      this.addHashForTitle(titleArr);
    },
    hashNavItemHandler(i:number) {
      const lastElTop = this.markdownBody && this.titleArr[this.titleArr.length - 1].offsetTop - this.markdownBody.offsetTop;
      if (this.scrollContainer && this.markdownBody && lastElTop) {
        Reflect.set(this.scrollContainer, "scrollTop", Math.ceil((this.titleArr[i].offsetTop - this.markdownBody.offsetTop) / lastElTop * (this.scrollContainer?.scrollHeight - this.scrollContainer?.offsetHeight)));
      }
    },
    addHashForTitle(titleArr?:NodeList) {
      this.titleArr = titleArr?.length ? Array.from(titleArr) : [];
      titleArr && titleArr.forEach((v:any, i) => {
        v.id = `mo-title` + i + "-" + v.nodeName;
      });
    },
    containerScrollHandler() {
      // 最后一个元素距离offsetParent距离
      const lastElTop = this.markdownBody && this.titleArr[this.titleArr.length - 1].offsetTop - this.markdownBody.offsetTop;
      this.titleArr.find((v:HTMLElement, i:number) => {
        const flag = this.scrollContainer && this.markdownBody && lastElTop && this.scrollContainer?.scrollTop / (this.scrollContainer?.scrollHeight - this.scrollContainer?.offsetHeight) < (v.offsetTop - this.markdownBody.offsetTop) / lastElTop;
        if (flag) {
          this.activedItemIndex = i ? i - 1 : 0;
        } else {
          this.activedItemIndex = i;
        }
        return flag;
      });
    }
  }
};
</script>
