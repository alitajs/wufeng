import { dynamic } from 'alita';
import { wufengController, dashToPascalCase } from 'wufeng';
import type { ComponentGroup } from '@/schema';
import * as Icons from '@alita/icons';
import * as Yinhu from '@alita/react';
import { getItemByType } from './data_utils';
import { DataComponet } from './data_componet';
import DformComponent, { DformData } from './data_dform';
import { DFORM_FILE_NAME } from './menu';

const antdMobile = ['accordion', 'action-sheet', 'button', 'icon'];

// antdMobile.forEach((item: string) => {
//   const options = getItemByType(DataComponet, dashToPascalCase(item)) as any;
//   if (options?.type) {
//     wufengController.registerComponent(
//       dynamic(() => import(`antd-mobile/lib/${item}/index`).then((res) => res.default as any)),
//       { name: dashToPascalCase(item), ...options },
//     );
//   }
// });

// Object.keys(Yinhu).forEach((item: string) => {
//   const options = getItemByType(DataComponet, dashToPascalCase(item)) as any;
//   if (options?.type) {
//     wufengController.registerComponent(Yinhu[item], { name: `YH${item}`, ...options });
//   }
// });

// Object.keys(Icons).forEach((item: string) => {
//   const options = getItemByType(DataComponet, dashToPascalCase(item)) as any;
//   if (options?.type) {
//     wufengController.registerComponent(Icons[item], {
//       name: `I${item}`,
//       content: Yinhu[item],
//       options: {
//         ...options,
//         name: `I${item}`,
//       },
//     });
//   }
// });

const list = [
  'AddressPicker',
  'CoverRadio',
  // 'ExtraInput',
  'MultiplePicker',
  'RangeDatePicker',
  'NomarInput',
  'NomarSelect',
  'NomarPicker',
  'NomarSwitch',
  'NomarTextArea',
  'NomarDatePicker',
  'NomarRadio',
  'NomarCheckBox',
  'NomarImagePicker',
  'NomarCustom',
  'NomarText',
  'NomarFile',
];

Object.keys(DformComponent).forEach((item: string) => {
  const options = getItemByType(DformData, item) as any;
  // console.log(
  //   item,
  //   import(`@alitajs/dform/lib/components/${item}/index`).then((res) => {
  //     console.log(res.default);
  //   }),
  // );
  if (options?.type) {
    wufengController.registerComponent(DformComponent[item], { name: `${item}`, ...options });
    // wufengController.registerComponent(
    //   dynamic(() =>
    //     import(`@alitajs/dform/lib/components/${item}/index`).then((res) => res.default as any),
    //   ),
    //   { name: `${item}`, ...options },
    // );
  }
});
