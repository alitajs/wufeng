import React from 'react';
import type { FC } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import isMobile from 'ismobilejs';

const mobile = isMobile().any;
const Dnd: FC = ({ children }) => {
  return <DndProvider backend={mobile ? TouchBackend : HTML5Backend}>{children}</DndProvider>;
};
export default Dnd;
