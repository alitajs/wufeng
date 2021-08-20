import type { ComponentProps, PageDataItem } from '@wufeng/types';

// import { DataComponet } from "./data_componet";

// export function getTestSouData() {
//   return DataComponet;
// }

/**
 * 根据id取的数组项
 * @param {*} data
 * @param {*} id
 */
export function getItemById(data: ComponentProps[], id: number): ComponentProps {
  const newData = data.filter((item) => item.id === id);
  return { ...(newData[0] || {}) };
}

function getAddData(item: ComponentProps): PageDataItem {
  const data = {
    id: new Date().getTime(),
    component: JSON.parse(JSON.stringify(item)),
    childrenCom: [],
  };
  return data;
}

export function addComponent(
  leftData: PageDataItem[],
  centerData: PageDataItem[],
  item: ComponentProps,
  index: number,
) {
  const initData = { ...getAddData(item) };
  centerData.splice(index, 0, initData);
  return { leftData, centerData };
}

export function deleteComponent(centerData: PageDataItem[], id: number) {
  const d = centerData;
  for (let key = d.length - 1; key >= 0; ) {
    if (d[key].id === id) {
      d.splice(key, 1);
      break;
    } else if (d[key].childrenCom && d[key].childrenCom.length > 0) {
      d[key].childrenCom = deleteComponent(d[key].childrenCom, id);
    }
    key -= 1;
  }
  return d;
}

function reorder(list: PageDataItem[], startIndex: number, endIndex: number): PageDataItem[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

export function moveComponent(
  centerData: PageDataItem[],
  dragIndex: number,
  hoverIndex: number,
): PageDataItem[] {
  return reorder(centerData, dragIndex, hoverIndex);
}