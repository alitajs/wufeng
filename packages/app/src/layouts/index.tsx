import React from 'react';
import type { FC } from 'react';
import type { ConnectProps } from 'alita';
import BasicLayout from './BasicLayout';
import styles from './index.less';

interface LayoutPageProps extends ConnectProps {}
const Layout: FC<LayoutPageProps> = (props) => {
  const { location } = props;
  const { pathname } = location;
  if (/\/register|login|workplace/i.test(pathname)) {
    return <div className={styles.container}>{props.children}</div>;
  }
  return <BasicLayout {...props} />;
};

export default Layout;
