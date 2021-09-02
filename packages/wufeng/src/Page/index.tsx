import React from 'react';
import type { FC } from 'react';
import { Page, Content, Grid, GridItem } from '@alita/react';
import './index.less';

const classPrefix = `wf-page`;

export interface WFPageProps {
  ComponentFrame: any;
  DisplayFrame: any;
  RateFrame: any;
}

const PageLayout: FC<WFPageProps> = ({ ComponentFrame, DisplayFrame, RateFrame }) => {
  return (
    <Grid className={classPrefix} columns={3}>
      <GridItem span={1}>
        <Page>
          <Content>
            <ComponentFrame />
          </Content>
        </Page>
      </GridItem>
      <GridItem span={1}>
        <Page>
          <Content>
            <DisplayFrame />
          </Content>
        </Page>
      </GridItem>
      <GridItem span={1}>
        <Page>
          <Content style={{ backgroundColor: '#fafafa' }}>
            <RateFrame />
          </Content>
        </Page>
      </GridItem>
    </Grid>
  );
};

export default PageLayout;
