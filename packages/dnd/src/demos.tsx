import React, { FC, useState } from 'react';
import { Drag, Drop, DndProvider, DataUtils } from './index';

interface PageProps {}

interface Item {
  text: string;
  id: string;
}

const dataList: Item[] = new Array(10)
  .fill(0)
  .map((i, index) => ({ text: `第${index}个`, id: `${index}` }));

const Component: FC<PageProps> = () => {
  const [list, setList] = useState(dataList);
  // @ts-ignore
  const onDrops = (props, monitor, data) => {
    let startIndex = 0;
    let endIndex = 0;
    for (let key = list.length - 1; key >= 0; ) {
      if (list[key].id === data.id) {
        endIndex = key;
      }
      if (list[key].id === props.id) {
        startIndex = key;
      }
      key -= 1;
    }
    const newMyApp = DataUtils.reorder(list, startIndex, endIndex) as Item[];
    setList(newMyApp);
  };

  /**
   * 我的应用样式
   * @param data
   */
  const myAppRender = (item: Item) => {
    return (
      <Drag data={item} key={item.id}>
        <Drop data={item} onDrop={onDrops}>
          <div>{item.text}</div>
        </Drop>
      </Drag>
    );
  };

  return <div>{list.map((item) => myAppRender(item))}</div>;
};

const Page: FC<PageProps> = (props) => {
  return (
    <DndProvider>
      <Component />
    </DndProvider>
  );
};
export default Page;
