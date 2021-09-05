import React, { FC } from 'react';
import { Card } from 'antd';
import './index.less';

export interface CardProps {
  Icon: React.ReactNode;
  title: string;
  subTitle: string;
}

const CardComp: FC<CardProps> = ({ Icon, title, subTitle }) => {
  return (
    <Card hoverable>
      <div className="wf-ware-card-icon">{<Icon />}</div>
      <div className="wf-ware-card-title">{title}</div>
      <div className="wf-ware-card-subTitle">{subTitle}</div>
    </Card>
  );
};

export default CardComp;
