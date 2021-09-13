import type { FC } from 'react';
import { Drop, Drag, wufengController } from '../';
import type { DropTargetMonitor } from '../';
import './index.less';

interface IDeviceProps {
  pageData?: any[];
  onAddDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
  onMoveDrop: (
    dragIndex: number,
    hoverIndex: number,
    dragItem: any,
    hoverItem: any,
    monitor?: DropTargetMonitor,
  ) => void;
  onClick?: (event: MouseEvent, data: any) => void;
}

const Device: FC<IDeviceProps> = ({ pageData = [], onAddDrop, onMoveDrop, onClick }) => {
  const { components } = wufengController;

  const showChildren = (res: any) => {
    const { item, name, props, index } = res;
    const { childrenCom = [] } = item;
    const Com = components.find((i) => i.name === name);
    if (Com && Com.class) {
      return (
        <Drop
          key={`drop${item.id}`}
          data={{ ...item, index }}
          onHover={onMoveDrop}
          onDrop={onAddDrop}
        >
          <Drag data={{ ...item, index }}>
            <div
              onClick={(e: any) => {
                onClick?.(e, item);
              }}
            >
              <Com.class {...props} parentId={item.id}></Com.class>
              {!!childrenCom.length &&
                childrenCom.map((child: any, ind: number) => {
                  const ChildCom = components.find((i) => i.name === child.name);
                  if (ChildCom && ChildCom.class)
                    return <ChildCom.class {...child.component.props} parentId={child.id} />;
                  return <></>;
                })}
            </div>
          </Drag>
        </Drop>
      );
    }
    return (
      <Drop
        key={`drop${item.id}`}
        data={{ ...item, index }}
        onHover={onMoveDrop}
        onDrop={onAddDrop}
      >
        <Drag data={{ ...item, index }}>
          <div style={{ height: '40px', backgroundColor: 'red', color: 'white' }}>
            未找到组件，请检查组件类型
          </div>
        </Drag>
      </Drop>
    );
  };

  return (
    <div className="wf-phone-device" data-device-type="iOS">
      <div className="wf-phone-device-status">
        <span>wufeng</span>
        <span>
          {new Date().getHours()}:{new Date().getMinutes()}
        </span>
      </div>
      <Drop
        data={{ panel: 'phone' }}
        onDrop={onAddDrop}
        onHover={() => {}}
        onOverStyle={{
          flex: 1,
          border: '1px dashed',
        }}
        canDropStyle={{
          flex: 1,
          border: '1px dashed',
        }}
        style={{
          flex: 1,
          border: 0,
          overflowY: 'auto',
        }}
      >
        {pageData.map((item, index) => {
          const { name, props } = item.component;
          return showChildren({
            item,
            name,
            props,
            index,
          });
        })}
        {/* <iframe title="dumi-previewer" src={url} key={renderKey} /> */}
      </Drop>
      <div className="wf-phone-device-action"></div>
    </div>
  );
};

export default Device;
