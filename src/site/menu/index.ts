import { forEachTransformMKDOCPathControler } from "../utils/viteGlobalImport";
import { RouteRecordRaw } from "vue-router";

interface LeftListMenuParams{
  name:string,
  children?:LeftListMenuParams[],
  id?:string,
  expand?:boolean,
  route?:RouteRecordRaw|string
}

export class LeftListMenu {
  name:string
  children?:LeftListMenu[] = []
  id? = ""
  expand? = false
  route?:RouteRecordRaw|string = ""
  constructor({ name, children, id, route, expand }:LeftListMenuParams) {
    this.name = name;
    this.children = children;
    this.id = id;
    this.expand = expand;
    this.route = route;
  }
}

export function menu(menuData:LeftListMenu[] = []):void {
  const createMenu = (path) => {
    path && menuData.push(new LeftListMenu({ name: path, route: `/${path}` }));
  };
  createMenu.doneCallBack = () => {
    console.log("组件菜单加载完成✅");
  };
  forEachTransformMKDOCPathControler.addDepend(createMenu);
}
