import type { FC } from 'react';
import { wufengController } from '../';
import './index.less';

interface IDeviceProps {
  pageData?: any[];
}

const Device: FC<IDeviceProps> = ({ pageData = [] }) => {
  const { components } = wufengController;

  return (
    <div>
      {pageData.map((item, index) => {
        const { name, props } = item.component;
        const Com = components.find((i) => i.name === name);
        if (Com && Com.class) {
          return <Com.class key={`${item.id}`} {...props} />;
        }
        return (
          <div style={{ height: '40px', backgroundColor: 'red', color: 'white' }}>
            未找到组件，请检查组件类型
          </div>
        );
      })}
    </div>
  );
};

export default Device;
