import React from 'react';
import type { FC } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

interface DragProps {
  data: any;
  type?: string;
  icon?: any;
}
const Drag: FC<DragProps> = ({ data, children, type = 'dragBox', icon = '' }) => {
  const [{ opacity }, drager, connectDragPreview] = useDrag({
    item: { type, data },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });
  return (
    <div
      ref={drager}
      style={{
        opacity,
      }}
    >
      <DragPreviewImage src={icon} connect={connectDragPreview} />
      {children}
    </div>
  );
};
export default Drag;
