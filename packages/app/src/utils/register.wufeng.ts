import { dynamic } from 'alita';
import { wufengController, dashToPascalCase } from 'wufeng';
import * as Icons from '@alita/icons';
import * as Yinhu from '@alita/react';
import { getItemByType } from './data_utils';
import { DataComponet } from './data_componet';

const antdMobile = ['accordion', 'action-sheet', 'button', 'icon'];

antdMobile.forEach((item: string) => {
  const options = getItemByType(DataComponet, dashToPascalCase(item)) as any;
  if (options?.type) {
    wufengController.registerComponent(
      dynamic(() => import(`antd-mobile/lib/${item}/index`).then((res) => res.default as any)),
      { name: dashToPascalCase(item), ...options },
    );
  }
});

Object.keys(Yinhu).forEach((item: string) => {
  const options = getItemByType(DataComponet, dashToPascalCase(item)) as any;
  if (options?.type) {
    wufengController.registerComponent(Yinhu[item], { name: `YH${item}`, ...options });
  }
});

Object.keys(Icons).forEach((item: string) => {
  wufengController.registerComponent(Icons[item], { name: `I${item}` });
});
