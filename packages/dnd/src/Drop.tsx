import React, { useRef } from 'react';
import type { FC } from 'react';
import type { DragObjectWithType, DropTargetMonitor } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { useDebounceFn } from 'ahooks';

interface DragDataObject extends DragObjectWithType {
  data: any;
}
interface DropProps {
  onDrop: (item: any, monitor: DropTargetMonitor, data: any) => void;
  onHover: (
    dragIndex: number,
    hoverIndex: number,
    dragItem: any,
    hoverItem: any,
    monitor?: DropTargetMonitor,
  ) => void;
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
  const ref = useRef<HTMLDivElement>(null);
  const { run } = useDebounceFn(
    ({ dragIndex, hoverIndex, dragItem, hoverItem, monitor }) => {
      onHover?.(dragIndex, hoverIndex, dragItem, hoverItem, monitor);
    },
    {
      wait: 10,
    },
  );
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: type,
    drop: (item, monitor) => onDrop?.((item as DragDataObject).data, monitor, data),
    hover: (item: any, monitor) => {
      if (!ref.current) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // 不是已有项，不做移动操作
      if ((!item.data.index && item.data.index !== 0) || (!data.index && data.index !== 0)) return;
      const dragIndex = item.data.index;
      const hoverIndex = data.index;
      if (dragIndex === hoverIndex) return;
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as any).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      if (monitor.isOver({ shallow: true })) {
        run({ dragIndex, hoverIndex, dragItem: item.data, hoverItem: data, monitor });
      }
      // eslint-disable-next-line
      item.data.index = hoverIndex;
    },
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
  drop(ref);
  return (
    <div ref={ref} style={{ ...trueStyle }}>
      {children}
    </div>
  );
};
export default Drop;
