export function kebabtoCamel(name:string) {
  const matchName = name.match(/-./g);
  return matchName ? matchName.reduce((currentName, v) => currentName.replace(/-./, v.charAt(1).toLocaleUpperCase()), name) : name;
}

export function firstLetterToUppper(name:string) {
  return name.replace(/^./, name.charAt(0).toLocaleUpperCase());
}

export function resolveNameFromPath(path:string, publicPath?:string):string | undefined {
  if (publicPath) {
    return path.replace(publicPath, "").replace(/\..*/, "");
  }
  const name = path.match(/\/(\w|\d|-|_)+\./)?.[0].slice(1, -1);

  if (name === "index") {
    return resolveNameFromPath(path && path.replace(/\/index/, ""));
  }
  return name;
}
declare type parameTypeFx = (transformName?:string, pathValue?:any, k?:string)=>any
interface parameTypeProp{
  doneCallBack?:()=>any
}
declare type parameType = parameTypeFx & parameTypeProp

declare type pathObject = {[path:string]:any}
export function forEachTransformPath(pathObject:pathObject, publicPath?:string) {
  const needExecufx:parameType[] = [];
  return {
    addDepend(fx:parameType):void {
      needExecufx.push(fx);
    },
    start() {
      for (const k in pathObject) {
        const transformName = resolveNameFromPath(k, publicPath);
        needExecufx.forEach((v:parameType) => {
          v(transformName, pathObject[k], k);
        });
      }
      needExecufx.forEach(({ doneCallBack }) => {
        doneCallBack && doneCallBack();
      });
    }
  };
}

export const forEachTransformMKDOCPathControler = forEachTransformPath(import.meta.glob("../doc/**/*.md"), "../doc/template/");
export function startorTransformPath():void {
  forEachTransformMKDOCPathControler.start();
}
