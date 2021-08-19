import React from 'react';
import type { FC } from 'react';
import { connect } from 'alita';
import type { ConnectProps } from 'alita';
import { WFPage, WFComponentsWare, WFPhoneFrame } from 'wufeng';
import type { DropTargetMonitor } from 'wufeng';
import type { WuFengModelState } from 'wufeng-model';

const RateFrame: FC = () => <div>3</div>;
interface IndexPageProps extends ConnectProps {
  wufeng: WuFengModelState;
}
const IndexPage: FC<IndexPageProps> = ({ wufeng, dispatch }) => {
  const { components } = wufeng;

  const onAddDrop = (props: any, monitor: DropTargetMonitor, data: any) => {
    const item = monitor.getItem();
    if (monitor.isOver({ shallow: true })) {
      dispatch?.({ type: 'wufeng/addItem', payload: { item: item.data, index: 'max' } });
    }
  };
  const onMoveDrop = (props: any, monitor: DropTargetMonitor, data: any) => {
    const item = monitor.getItem();
    // if (monitor.isOver({ shallow: true })) {
    //   dispatch?.({ type: "wufeng/moveItem", payload: { item: item.data, index: "max" } });
    // }
  };
  return (
    <WFPage
      ComponentFrame={WFComponentsWare}
      DisplayFrame={() => (
        <WFPhoneFrame onAddDrop={onAddDrop} onMoveDrop={onMoveDrop} pageData={components} />
      )}
      RateFrame={RateFrame}
    />
  );
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(IndexPage);
