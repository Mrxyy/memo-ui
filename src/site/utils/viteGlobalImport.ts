export function resolveNameFromPath(path:string):string | undefined {
  return path.match(/\/(\w|\d|-|_)+\./)?.[0].slice(1, -1);
}

declare type parameType = (transformName?:string, pathValue?:any, k?:string)=>any
declare type pathObject = {[path:string]:any}
export function forEachTransformPath(pathObject:pathObject) {
  const needExecufx:parameType[] = [];
  return {
    addDepend(fx:parameType):void {
      needExecufx.push(fx);
    },
    start() {
      for (const k in pathObject) {
        const transformName = resolveNameFromPath(k);
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

export const forEachTransformMKDOCPathControler = forEachTransformPath(import.meta.glob("../../doc/*.md"));
export function startorTransformPath():void {
  forEachTransformMKDOCPathControler.start();
}
