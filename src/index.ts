import { DefineComponent, App } from "vue";
import "./styles/index.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { kebabtoCamel, firstLetterToUppper, forEachTransformPath } from "./utils/viteGlobalImport";
const forEachTransformPathControler = forEachTransformPath(import.meta.globEager("./components/**/*.vue"));

type PluginInstallFunction = any

interface EsModel {
  [x: string]: any,
  default: DefineComponent<{}, {}, any>
}

type Plugin = { install: PluginInstallFunction, [name: string]: (DefineComponent<{}, {}, any> | undefined | ((app: DefineComponent<{}, {}, any>, options: any) => any)) | PluginInstallFunction }
const memo: Plugin = <any>{};
forEachTransformPathControler.addDepend((path?: string, value?: EsModel) => {
  if (path) {
    console.log("mo" + firstLetterToUppper(kebabtoCamel(path)));
    memo["mo" + firstLetterToUppper(kebabtoCamel(path))] = value?.default;
  }
});
memo.install = function (app: App) {
  Object.entries<DefineComponent<{}, {}, any>>(memo as Plugin).forEach((v: any[]) => {
    if (typeof v[1] !== "function") {
      app.component(v[0], v[1]);
    }
  });
};
forEachTransformPathControler.start();
export default memo;
