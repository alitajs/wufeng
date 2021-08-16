import React, { FC, useEffect } from 'react';
import { ConnectProps, connect } from 'alita';
import styles from './index.less';

interface PageProps extends ConnectProps {
  wufeng: any;
}

const WufengPage: FC<PageProps> = ({ wufeng, dispatch }) => {
  const InitSourceData = [{ title: 'wufeng' }];
  // 这里发起了初始化请求
  useEffect(() => {
    dispatch!({
      type: 'wufeng/initSourceData',
      payload: {
        sourceData: InitSourceData,
      },
    });
    return () => {
      // 这里写一些需要消除副作用的代码
      // 如: 声明周期中写在 componentWillUnmount
    };
  }, []);
  // 注意，上面这里写空数组，表示初始化，如果需要监听某个字段变化再发起请求，可以在这里写明
  const { sourceData } = wufeng;
  console.log(sourceData);
  return <div className={styles.center}>Hello {sourceData[0]?.title}</div>;
};

export default connect(({ wufeng }: { wufeng: any }) => ({ wufeng }))(WufengPage);
