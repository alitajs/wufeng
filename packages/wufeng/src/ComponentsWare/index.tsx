import type { FC } from 'react';
import { Tabs } from 'antd';
import { Grid } from '@alita/react';
import { Card, dashToPascalCase } from '../';
import { wufengController } from '@wufengteam/core';
import type { Component } from '@wufengteam/core';
import { Drag } from '@alitajs/dnd';
import * as Icons from '@alita/icons';

const { TabPane } = Tabs;

const ComponentsWare: FC = () => {
  const { components } = wufengController;

  return (
    <Tabs centered>
      <TabPane tab="动态表单" key="1" style={{ padding: '0 10px' }}>
        <Grid columns={2} gap="10">
          {components.map((item: Component) => {
            const { class: Com, cardProps, ...reset } = item;
            if (Com) {
              return (
                <Drag data={reset} key={item.name}>
                  <Card
                    Icon={Icons[dashToPascalCase(item.name)]}
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
