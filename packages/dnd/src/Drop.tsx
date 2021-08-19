import React from 'react';
import type { FC } from 'react';
import { useDrop, DragObjectWithType, DropTargetMonitor } from 'react-dnd';

interface DragDataObject extends DragObjectWithType {
  data: any;
}
interface DropProps {
  onDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
  onHover: (item: any, monitor: DropTargetMonitor, data: any) => void;
  data: any;
  type?: string;
  style?: React.CSSProperties;
  canDropStyle?: React.CSSProperties;
  onOverStyle?: React.CSSProperties;
}

const overStyle = {
  // height: '100%',
  border: '1px dashed black',
};
const defaultStyle = {};
const dropStyle = {};
const Drop: FC<DropProps> = ({
  onDrop,
  onHover,
  data,
  children,
  type = 'dragBox',
  style = defaultStyle,
  canDropStyle = dropStyle,
  onOverStyle = overStyle,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    drop: (item, monitor) => onDrop?.((item as DragDataObject).data, monitor, data),
    hover: (item, monitor) => onHover?.((item as DragDataObject).data, monitor, data),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  let trueStyle = style;
  if (isOver) {
    trueStyle = { ...trueStyle, ...onOverStyle };
  } else if (canDrop) {
    trueStyle = { ...trueStyle, ...canDropStyle };
  }
  return (
    <div ref={drop} style={{ ...trueStyle }}>
      {children}
    </div>
  );
};
export default Drop;
