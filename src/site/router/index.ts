import { createRouter, createWebHashHistory } from "vue-router";
import { forEachTransformMKDOCPathControler } from "../utils/viteGlobalImport";
import memo from "../../components/colour-text/memo.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: []
});

forEachTransformMKDOCPathControler.addDepend((path, value) => {
  router.addRoute({ path: `/${path}`, component: value });
});
export default router;
