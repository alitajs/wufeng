import { version } from '../package.json';
import type { Component } from './types';

// utils
export const isBrowser = typeof window !== 'undefined';

function find<T = any>(target: T[], callback: (item: T, index: number, list: T[]) => boolean) {
  const list = target;
  // Makes sures is always has an positive integer as length.
  // eslint-disable-next-line
  const length = list.length >>> 0;
  // eslint-disable-next-line
  const thisArg = arguments[1];
  for (let i = 0; i < length; ) {
    const element = list[i];
    if (callback.call(thisArg, element, i, list)) {
      return element;
    }
    i += 1;
  }
  return null;
}
// utils:end

export class WuFeng {
  constructor() {
    if (WuFeng.singletonInstance) {
      return WuFeng.singletonInstance;
    }
  }
  static singletonInstance: WuFeng;

  public VERSION = version;
  // 展示的所有组件
  public components: Component[] = [];
  // TODO: 类型还没写，展示的所有区块
  public blocks: any[] = [];
  // TODO: 类型还没写，右侧编辑的表单类型，有一个组件的属性是一些特定的操作，比如选择云上的图片，就不是简单的 input
  public inputComponent: any[] = [];

  public registerComponent(component: any, options: Component) {
    const spec = {
      class: component,
      ...options,
    };
    this.addComponent(spec);
  }

  private addComponent(component: Component) {
    const current = find(this.components, (item) => item.name === component.name);
    if (current) {
      // FIXME: why does sometimes we get an extra post without class - probably
      // from postMessage handler wrong in some place
      if (current.class && !component.class) {
        return;
      }
      this.components.splice(this.components.indexOf(current), 1, component);
    } else {
      this.components.push(component);
    }
  }
}