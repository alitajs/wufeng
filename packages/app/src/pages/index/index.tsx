import React, { useCallback, Fragment, useState } from 'react';
import type { FC } from 'react';
import { connect, IRouteComponentProps } from 'alita';
import type { ConnectProps } from 'alita';
import { WFPage, WFComponentsWare, WFPhoneFrame, EditorStyle } from 'wufeng';
import type { DropTargetMonitor } from 'wufeng';
import type { WuFengModelState } from 'wufeng-model';

const RateFrame: FC = ({ selectItem }) => (
  <EditorStyle selectDom={selectItem} onChange={(a) => console.log(a)} />
);
interface IndexPageProps extends ConnectProps {
  wufeng: WuFengModelState;
}
const IndexPage: FC<IndexPageProps> = ({ wufeng, dispatch }) => {
  const { components } = wufeng;
  const [selectItem, setSelectItem] = useState();

  const onAddDrop = (item: any = {}, monitor: DropTargetMonitor, data: any = {}) => {
    // component 存在就不做任何事情，表示的是，拖动了已有项放到容器中，不做添加操作
    if (item.component) return;
    // 这里会有两种放置状态，一种是放到最外层容器中，为从尾部加入；另一种为防到已有项上面，为插入操作
    if (monitor.isOver({ shallow: true })) {
      // 是容器组件的标示
      const isLayout = data?.component?.isLayout;
      const parentId = isLayout ? data.id : 'wufengmainroot';
      const index = !data.index && data.index !== 0 ? 'max' : data.index;
      dispatch?.({
        type: 'wufeng/addItem',
        payload: { parentId, item: item?.options ? item.options : item, index },
      });
    }
  };

  const onMoveDrop = async (
    dragIndex: number,
    hoverIndex: number,
    dragItem: any,
    hoverItem: any,
  ) => {
    const data = await dispatch?.({
      type: 'wufeng/moveItem',
      payload: {
        dragIndex,
        hoverIndex,
        dragItem,
        hoverItem,
        components,
      },
    });
    return data;
  };
  const onClick = (e) => {
    setSelectItem(e.target);
  };

  return (
    <Fragment>
      <WFPage
        ComponentFrame={WFComponentsWare}
        DisplayFrame={() => (
          <WFPhoneFrame
            onAddDrop={onAddDrop}
            onMoveDrop={onMoveDrop}
            pageData={components}
            onClick={onClick}
          />
        )}
        RateFrame={() => <RateFrame selectItem={selectItem} />}
      />
    </Fragment>
  );
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(IndexPage);
