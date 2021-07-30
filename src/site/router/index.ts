import { createRouter, createWebHashHistory } from "vue-router";
import { forEachTransformMKDOCPathControler } from "../../utils/viteGlobalImport";

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
});

forEachTransformMKDOCPathControler.addDepend((path?:string, value?:any) => {
  router.addRoute({ path: `/${path}`, component: value });
});
export default router;
