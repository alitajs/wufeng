import React, { useEffect } from 'react';
import type { FC } from 'react';
import { Page, Content, Footer, Header } from '@alita/react';
import { DndProvider } from '@alitajs/dnd';
import { connect } from 'alita';
import type { ConnectProps } from 'alita';
import { Header as WFHeader } from 'wufeng';
import { WUFENG_LOCAL_NAME } from '@/constants';
import type { WuFengModelState } from '@wufengteam/model';
import { savePage, getPage } from '@alita/cloud';

interface LayoutPageProps extends ConnectProps {
  wufeng: WuFengModelState;
}
const Layout: LayoutPageProps = ({ children, history, wufeng, dispatch }) => {
  const { location } = history;
  const { components, canUndo, canRedo } = wufeng;

  return (
    <DndProvider>
      <Page>
        <Header>
          <WFHeader
            onShow={() => history.push('preview')}
            onUndo={() => {
              dispatch?.({
                type: 'wufeng/unDo',
                payload: {},
              });
            }}
            onRedo={() => {
              dispatch?.({
                type: 'wufeng/reDo',
                payload: {},
              });
            }}
            canUndo={canUndo}
            canRedo={canRedo}
            onSave={() => {
              const token = localStorage.getItem(WUFENG_LOCAL_NAME);
              if (token) {
                savePage({ id: token, page: components }).then(
                  (data) => {
                    // 成功保存之后，执行其他逻辑
                    console.log(`保存成功。objectId：${data.id}`);
                  },
                  (error) => {
                    // 异常处理
                  },
                );
              }
            }}
          />
        </Header>
        <Content style={{ overflow: 'hidden', zIndex: 99 }}>{children}</Content>
        <Footer>footer</Footer>
      </Page>
    </DndProvider>
  );
};

export default connect(({ wufeng }: { wufeng: WuFengModelState }) => ({ wufeng }))(Layout);
