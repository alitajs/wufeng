import { dynamic } from 'alita';
import { wufengController } from 'wufeng';
import * as Yinhu from '@alita/react';
import { getItemByType } from './data_utils';
import { DataComponet } from './data_componet';

const antdMobile = ['accordion', 'action-sheet', 'button', 'icon'];

function lineToHump(s: string) {
  const a = s.split('-');
  let result = a[0].slice(0, 1).toUpperCase() + a[0].slice(1);
  for (let i = 1; i < a.length; ) {
    result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
    i += 1;
  }
  return result;
}

function humpToLine(name: string) {
  return name.replace(/([A-Z])/g, '-$1').toLowerCase();
}

antdMobile.forEach((item: string) => {
  const options = getItemByType(DataComponet, lineToHump(item)) as any;
  if (options?.type) {
    wufengController.registerComponent(
      dynamic(() => import(`antd-mobile/lib/${item}/index`).then((res) => res.default as any)),
      { name: lineToHump(item), ...options },
    );
  }
});

Object.keys(Yinhu).forEach((item: string) => {
  const options = getItemByType(DataComponet, lineToHump(item)) as any;
  if (options?.type) {
    wufengController.registerComponent(Yinhu[item], { name: `YH${item}`, ...options });
  }
});
