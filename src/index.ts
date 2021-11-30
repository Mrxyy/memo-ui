import { DefineComponent } from "vue";
import "./styles/index.scss";
import { kebabtoCamel, firstLetterToUppper, forEachTransformPath } from "./utils/viteGlobalImport";
const forEachTransformPathControler = forEachTransformPath(import.meta.globEager("./components/**/*.vue"));
interface EsModel{
  [x:string]:any,
  default:DefineComponent<{}, {}, any>
}
const memo:{install: PluginInstallFunction,[name:string]:(DefineComponent<{}, {}, any> | undefined | ((app:DefineComponent<{}, {}, any>, options:any)=>any))} = {};
forEachTransformPathControler.addDepend((path?:string, value?:EsModel) => {
  if (path) {
    console.log("mo" + firstLetterToUppper(kebabtoCamel(path)));
    memo["mo" + firstLetterToUppper(kebabtoCamel(path))] = value?.default;
  }
});

memo.install = function(app:DefineComponent<{}, {}, any>) {
  Object.entries<DefineComponent<{}, {}, any>>(memo as DefineComponent<{}, {}, any>).forEach((v:any[]) => {
    if (typeof v[1] !== "function") {
      app.component(v[0], v[1]);
    }
  });
};
forEachTransformPathControler.start();
export default memo;
