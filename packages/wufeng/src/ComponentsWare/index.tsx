import React from 'react';
import type { FC } from 'react';
import { Tabs } from 'antd';
import { Page, Content, Grid, GridItem } from '@alita/react';
import { wufengController } from '../';
import type { Component } from '../';
import { Drag } from '@alitajs/dnd';

const ComponentsWare: FC = () => {
  const { components } = wufengController;

  return (
    <Grid columns={2}>
      {components.map((item: Component) => {
        const { class: Com, ...reset } = item;
        if (Com) {
          return (
            <Drag data={reset} key={item.name}>
              <Com {...item.props} />
            </Drag>
          );
        }
        return null;
      })}
    </Grid>
  );
};

export default ComponentsWare;
