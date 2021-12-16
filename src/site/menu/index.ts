import { forEachTransformMKDOCPathControler, resolveNameFromPath } from "../../utils/viteGlobalImport";
import { RouteRecordRaw } from "vue-router";

interface LeftListMenuParams {
  name: string,
  children?: LeftListMenuParams[],
  id?: string,
  expand?: boolean,
  route?: RouteRecordRaw | string
}

export class LeftListMenu {
  name: string
  children?: LeftListMenu[] = []
  id?= ""
  expand?= false
  route?: RouteRecordRaw | string = ""
  constructor({ name, children, id, route, expand }: LeftListMenuParams) {
    this.name = name;
    this.children = children;
    this.id = id;
    this.expand = expand;
    this.route = route;
  }
}

/**
@param menuData create menu inject menu item data and in call done hook in after
 */
export function menu(menuData: LeftListMenu[] = [], menuDefaultValue?: (v: any) => any): void {
  const createMenu = (transformName?: string): any => {
    let pervious: LeftListMenu[] | undefined = menuData;
    transformName?.split("/").reduce((count: string, v: string, currentIndex: number, arr: string[]) => {
      const routePath = count + `/${v}`;
      // 最后一项时注册路由，其他为field
      if (currentIndex === arr.length - 1) {
        v && pervious?.push(new LeftListMenu({ name: v === "index" ? arr[currentIndex - 1] : v, route: "/componment" + (v === "index" ? count : routePath) }));
      } else {
        let temp = pervious?.find((item: LeftListMenu) => {
          return item.name === v;
        });
        if (!temp) {
          temp = new LeftListMenu({ name: v, children: [] });
          pervious?.push(temp);
        }
        pervious = temp.children;
      }
      return routePath;
    }, "");
  };
  createMenu.doneCallBack = () => {
    // 当children为一个时候，父就是子
    const mergeSingleMenu = function (leftListmenu: LeftListMenu[]) {
      leftListmenu.forEach((v, i) => {
        if (v.children?.length === 1) {
          // 使用父的name
          v.children[0].name = leftListmenu[i].name;
          leftListmenu[i] = v.children[0];
          mergeSingleMenu(leftListmenu[i].children ?? []);
        } else if (v.children && v.children.length > 1) {
          v.expand = true;
          mergeSingleMenu(v.children);
        }
        // handle window.href enrty path to route map
        leftListmenu[i].route === location.pathname && menuDefaultValue && menuDefaultValue([0, i]); // here inject chain ,instead of menuItem
      });
    };
    mergeSingleMenu(menuData);
    console.log("组件菜单加载完成✅");
  };
  forEachTransformMKDOCPathControler.addDepend(createMenu);
}
