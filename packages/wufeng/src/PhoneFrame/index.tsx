import type { FC } from 'react';
import React from 'react';
import { Drop, Drag, wufengController } from '../';
import type { DropTargetMonitor } from '../';
import './index.less';

interface IDeviceProps {
  pageData?: any[];
  onAddDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
  onMoveDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
}

const Device: FC<IDeviceProps> = ({ pageData = [], onAddDrop, onMoveDrop }) => {
  const { components } = wufengController;
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
        type="blocks"
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
        {pageData.map((item) => {
          const { name, props } = item.component;
          const Com = components.find((i) => i.name === name);
          if (Com && Com.class) {
            return (
              <Drop
                key={item.id}
                onHover={onMoveDrop}
                onDrop={() => {}}
                data={item.component}
                type="list"
              >
                <Drag type="list" data={item.component}>
                  <Com.class {...props} />
                </Drag>
              </Drop>
            );
          }
          return null;
        })}
        {/* <iframe title="dumi-previewer" src={url} key={renderKey} /> */}
      </Drop>
      <div className="wf-phone-device-action"></div>
    </div>
  );
};

export default Device;
