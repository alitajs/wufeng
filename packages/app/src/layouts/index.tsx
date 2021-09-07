import React from 'react';
import type { FC } from 'react';
import { Page, Content, Footer, Header } from '@alita/react';
import { DndProvider } from '@alitajs/dnd';
import { Header as WFHeader } from 'wufeng';

const Layout: FC = ({ children }) => {
  return (
    <DndProvider>
      <Page>
        <Header>
          <WFHeader />
        </Header>
        <Content style={{ overflow: 'hidden', zIndex: 99 }}>{children}</Content>
        <Footer>footer</Footer>
      </Page>
    </DndProvider>
  );
};

export default Layout;
