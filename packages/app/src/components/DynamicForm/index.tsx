import type { FC } from 'react';
import { connect } from 'alita';
import type { ConnectProps } from 'alita';
import type { WuFengModelState } from 'wufeng-model';
import type { DropTargetMonitor } from 'wufeng';
import { Drop } from '@alitajs/dnd';

interface DynamicFormProps extends ConnectProps {
  wufeng: WuFengModelState;
  parentId: string | number;
}

const DynamicForm: FC<DynamicFormProps> = ({ dispatch, parentId, wufeng, children }) => {
  const onAddDrop = (item: any = {}, monitor: DropTargetMonitor, data: any = {}) => {
    dispatch!({
      type: 'wufeng/addItem',
      payload: {
        item,
        parentId,
      },
    });
  };

  return (
    <div
      style={{
        height: '200px',
        background: 'yellow',
      }}
    >
      {children}
      <Drop
        onDrop={onAddDrop}
        onHover={() => {}}
        data={{ panel: 'dform' }}
        onOverStyle={{
          height: '100%',
          border: '1px dashed',
        }}
        canDropStyle={{
          height: '100%',
          border: '1px dashed',
        }}
        style={{
          height: '100%',
          border: 0,
          overflowY: 'auto',
        }}
      ></Drop>
    </div>
  );
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(DynamicForm);
