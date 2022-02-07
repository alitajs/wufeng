import { dynamic } from 'alita';
import { wufengController } from '@wufengteam/core';
import type { ComponentGroup } from '@/schema';
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

Object.keys(DformComponent).forEach((item: string) => {
  const options = getItemByType(DformData, item) as any;
  if (options?.type) {
    wufengController.registerComponent(DformComponent[item], {
      name: `${item}`,
      ...options,
    });
    // wufengController.registerComponent(
    //   dynamic(() =>
    //     import(`@alitajs/dform/lib/components/${item}`).then((res) => res.default as any),
    //   ),
    //   {
    //     name: `A${item}`,
    //     ...options,
    //   },
    // );
  }
});
