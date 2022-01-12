import React, { useEffect } from 'react';
import type { FC } from 'react';
import type { ConnectProps } from 'alita';
import { connect } from 'alita';
import { getPage } from '@alita/cloud';
import type { WuFengModelState } from '@wufengteam/model';
import { WUFENG_LOCAL_NAME } from '@/constants';
import BasicLayout from './BasicLayout';
import styles from './index.less';

const loginPath = '/login';

interface LayoutPageProps extends ConnectProps {}
const Layout: FC<LayoutPageProps> = (props) => {
  const { location, history, wufeng, dispatch } = props;
  const { pathname } = location;
  const { components } = wufeng;

  useEffect(() => {
    // onPageChange
    const token = localStorage.getItem(WUFENG_LOCAL_NAME);
    // 如果没有登录，重定向到 login
    if (!token) {
      history.push(loginPath);
    }
  }, [location.pathname]);
  useEffect(() => {
    // onPageChange
    const token = localStorage.getItem(WUFENG_LOCAL_NAME);
    // 如果没有登录，重定向到 login
    if (token) {
      getPage({ id: token }).then(
        (data) => {
          // 成功保存之后，执行其他逻辑
          const content = data[0].get('content');
          console.log(content);
          dispatch?.({
            type: 'wufeng/save',
            payload: { components: JSON.parse(content) },
          });
        },
        (error) => {
          // 异常处理
          console.log(error);
        },
      );
    }
  }, []);
  if (/\/preview/i.test(pathname)) {
    return <div>{props.children}</div>;
  }
  if (/\/register|login|workplace/i.test(pathname)) {
    return <div className={styles.container}>{props.children}</div>;
  }
  return <BasicLayout {...props} />;
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(Layout);
