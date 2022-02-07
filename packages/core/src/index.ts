import type { Component, Input } from './types';
// @ts-ignore
import { version } from '../package.json';

export const isBrowser = typeof window !== 'undefined';

export function findItem<T = any>(
  target: T[],
  callback: (item: T, index: number, list: T[]) => boolean,
) {
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
  // 右侧编辑的表单类型，有一个组件的属性是一些特定的操作，比如选择云上的图片，就不是简单的 input
  public inputComponents: Input[] = [];

  // 所有需要翻译的标签
  public labels: any = {};

  // 默认国际化为中文 https://en.wikipedia.org/wiki/IETF_language_tag
  public local: string = 'zh-CN';

  public findLabel(key: string, local?: string) {
    if (this.labels[local || this.local] && this.labels[local || this.local][key]) {
      return this.labels[local || this.local][key];
    }
    return key;
  }

  public setLang(local: string) {
    this.local = local;
  }

  public registerLabels(key: any, value: Component, local?: string) {
    this.labels[local || this.local][key] = value;
  }

  public pushLabels(labels: object, local: string = 'zh-CN') {
    this.labels[local] = { ...this.labels[local], ...labels };
  }

  public registerComponent(component: any, options: Component) {
    const spec = {
      class: component,
      ...options,
    };
    this.addComponent(spec);
  }

  public registerInput(component: any, options: Input) {
    const spec = {
      class: component,
      ...options,
    };
    this.addInputComponent(spec);
  }

  private addComponent(component: Component) {
    const current = findItem(this.components, (item) => item.name === component.name);
    if (current) {
      if (current.class && !component.class) {
        return;
      }
      this.components.splice(this.components.indexOf(current), 1, component);
    } else {
      this.components.push(component);
    }
  }

  private addInputComponent(component: Input) {
    const current = findItem(this.inputComponents, (item) => item.name === component.name);
    if (current) {
      if (current.class && !component.class) {
        return;
      }
      this.inputComponents.splice(this.inputComponents.indexOf(current), 1, component);
    } else {
      this.inputComponents.push(component);
    }
  }
}

// eslint-disable-next-line
let wufeng;
if ((window as any).wufengController) {
  wufeng = (window as any).wufengController;
} else {
  wufeng = new WuFeng();
}
WuFeng.singletonInstance = wufeng;

// 将注册器挂载在全局，方便多个地方同时注册
(window as any).wufengController = wufeng;
export { wufeng as wufengController };
