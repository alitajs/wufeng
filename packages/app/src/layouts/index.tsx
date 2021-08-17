import React from 'react';
import type { FC } from 'react';
import { Page, Content, Footer, Header } from '@alita/react';
import { DndProvider } from '@alitajs/dnd';

const Layout: FC = ({ children }) => {
  return (
    <DndProvider>
      <Page>
        <Header>title</Header>
        <Content style={{ overflow: 'hidden' }}>{children}</Content>
        <Footer>footer</Footer>
      </Page>
    </DndProvider>
  );
};

export default Layout;
