import { createRouter, createWebHistory } from "vue-router";
import { forEachTransformMKDOCPathControler, forEachTransformPagePathControler } from "../../utils/viteGlobalImport";
import homePage from "../page/index.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: homePage }]
});

forEachTransformPagePathControler.addDepend((path?: string, value?: any) => {
  path && router.addRoute({ path, alias: path === "/index" ? "/" : [], component: value, name: path });
});

forEachTransformMKDOCPathControler.addDepend((path?: string, value?: any) => {
  router.addRoute("/componment", { path: `/${path}`, component: value });
  path?.split("/").reduce((count: string, v: string, currentIndex: number, arr: string[]) => {
    const routePath = count + `/${v}`;
    if (currentIndex === arr.length - 1) {
      router.addRoute("/componment", { path: "/componment" + `${v === "index" ? count : routePath}`, component: value });
    }
    return routePath;
  }, "");
});

export default router;
