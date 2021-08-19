import React from 'react';
import type { FC } from 'react';
import { ConnectProps, connect } from 'alita';
import styles from './index.less';
import { wufengController as aa } from 'wufeng';
import { Button } from 'antd-mobile';
// const { components } = wufeng;
interface PageProps extends ConnectProps {
  wufeng: any;
}

const WufengPage: FC<PageProps> = ({ wufeng, dispatch }) => {
  return (
    <div className={styles.center}>
      <Button type="primary">123</Button>
      {aa.components.map((item) => {
        const Component = item.class;
        if (Component) {
          return <Component type="primary">123</Component>;
        }
        return null;
      })}
    </div>
  );
};

export default connect(({ wufeng }: { wufeng: any }) => ({ wufeng }))(WufengPage);
