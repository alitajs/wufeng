import type { FC } from 'react';
import { Tabs } from 'antd';
import { Grid } from '@alita/react';
import { wufengController, Card } from '../';
import type { Component } from '../';
import { Drag } from '@alitajs/dnd';
import * as Icons from '@alita/icons';

const { TabPane } = Tabs;

const ComponentsWare: FC = () => {
  const { components } = wufengController;

  return (
    <Tabs centered>
      <TabPane tab="动态表单" key="1" style={{ padding: '0 10px' }}>
        <Grid columns={2} gap="10">
          {components.map((item: Component, index: number) => {
            const { class: Com, cardProps, ...reset } = item;
            const iconList = Object.keys(Icons);
            if (Com) {
              return (
                <Drag data={reset} key={item.name}>
                  <Card
                    Icon={Icons[iconList[index]]}
                    title={cardProps?.title || ''}
                    subTitle={cardProps?.subTitle || ''}
                  />
                </Drag>
              );
            }
            return null;
          })}
        </Grid>
      </TabPane>
    </Tabs>
  );
};

export default ComponentsWare;
