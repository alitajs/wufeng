import React from 'react';
import type { FC } from 'react';
import type { Component } from '../';
import { wufengController } from '../';
import { Drag } from '@alitajs/dnd';

const ComponentsWare: FC = () => {
  const { components } = wufengController;
  return (
    <>
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
    </>
  );
};

export default ComponentsWare;
