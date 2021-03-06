import type { FC } from 'react';
import { Card } from 'antd';
import type { CardProps } from '@wufengteam/types';
import './index.less';

const CardComp: FC<CardProps> = ({ Icon, title, subTitle }) => {
  return (
    <Card hoverable>
      {!!Icon && <div className="wf-ware-card-icon">{<Icon />}</div>}
      <div className="wf-ware-card-title">{title}</div>
      <div className="wf-ware-card-subTitle">{subTitle}</div>
    </Card>
  );
};

export default CardComp;
