import { createRouter, createWebHashHistory } from "vue-router";
import { forEachTransformMKDOCPathControler } from "../../utils/viteGlobalImport";

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
});

forEachTransformMKDOCPathControler.addDepend((path?:string, value?:any) => {
  router.addRoute({ path: `/${path}`, component: value });
  path?.split("/").reduce((count:string, v:string, currentIndex:number, arr:string[]) => {
    const routePath = count + `/${v}`;
    if (currentIndex === arr.length - 1) {
      router.addRoute({ path: `${v === "index" ? count : routePath}`, component: value });
      // v && menuData.push(new LeftListMenu({ name: v === "index" ? arr[currentIndex - 1] : v, route: v === "index" ? count : routePath }));
    }
    return routePath;
  }, "");
});
export default router;
