import React from 'react';
import type { FC } from 'react';
import { wufeng, Component } from '../';
import { Drag } from '@alitajs/dnd';

const ComponentsWare: FC = () => {
  const { components } = wufeng;
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
