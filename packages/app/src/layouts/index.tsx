import React from 'react';
import type { FC } from 'react';
import { Page, Content, Footer, Header } from '@alita/react';

const Layout: FC = ({ children }) => {
  return (
    <Page>
      <Header>title</Header>
      <Content style={{ overflow: 'hidden' }}>{children}</Content>
      <Footer>footer</Footer>
    </Page>
  );
};

export default Layout;
