import type { FC } from 'react';
import React from 'react';
import { Drop, DropTargetMonitor } from '../';

import './index.less';

interface IDeviceProps {
  components?: any[];
  onDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
}

const Device: FC<IDeviceProps> = ({ components = [], onDrop }) => {
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
        onDrop={onDrop}
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
        }}
      >
        {/* {components.map()} */}
        {/* <iframe title="dumi-previewer" src={url} key={renderKey} /> */}
      </Drop>
      <div className="wf-phone-device-action"></div>
    </div>
  );
};

export default Device;
