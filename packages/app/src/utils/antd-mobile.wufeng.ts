import { dynamic } from 'alita';
import { wufeng } from 'wufeng';
import { getItemByType } from './data_utils';
import { DataComponet } from './data_componet';

const antdMobile = ['accordion', 'action-sheet', 'button'];

function lineToHump(s: string) {
  const a = s.split('-');
  let result = a[0].slice(0, 1).toUpperCase() + a[0].slice(1);
  for (let i = 1; i < a.length; ) {
    result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
    i += 1;
  }
  return result;
}
antdMobile.forEach((item: string) => {
  const options = getItemByType(DataComponet, lineToHump(item)) as any;
  if (options?.type) {
    wufeng.registerComponent(
      dynamic(() => import(`antd-mobile/lib/${item}/index`).then((res) => res.default as any)),
      { name: lineToHump(item), ...options },
    );
  }
});
