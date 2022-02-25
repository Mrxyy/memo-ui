import { nextTick } from "vue";

/**
 * @description https://v3.cn.vuejs.org/guide/custom-directive.html#%E7%AE%80%E4%BB%8B
 * vue2 和 vue3 部分文档改动
*/
export const autoFocus = {
  mounted(el: Element) {
    // see below for details on arguments
    console.dir(el);
    console.dir(111);

    nextTick(() => {
      el.getElementsByTagName("input")[0].focus();
    });
  }
};
