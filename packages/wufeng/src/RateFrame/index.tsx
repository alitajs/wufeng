import React from 'react';
import type { FC } from 'react';
import Tabs from 'antd/lib/tabs';
import Card from 'antd/lib/card';
import 'antd/lib/tabs/style/index';
import 'antd/lib/card/style/index';
import EditorProps from '../EditorProps';
import EditorStyle from '../EditorStyle';
import './index.less';

const classPrefix = `wf-rate-frame`;

const { TabPane } = Tabs;
interface RateFrameProps {
  dispatch: any;
  selectItem: any;
  selectElement: any;
}
const RateFrame: FC<RateFrameProps> = ({ dispatch, selectItem, selectElement }) => {
  const changeItemProp = (data: any) => {
    dispatch?.({ type: 'wufeng/changeItemProp', payload: data });
    dispatch?.({
      type: 'wufeng/setShowItemData',
      payload: {
        showItemData: data,
      },
    });
  };
  return (
    <Tabs defaultActiveKey="props" className={classPrefix} centered>
      <TabPane tab="属性" key="props">
        <Card style={{ backgroundColor: '#fafafa' }}>
          <EditorProps selectItem={selectItem} onChange={changeItemProp} />
        </Card>
      </TabPane>
      <TabPane tab="样式" key="style">
        <EditorStyle
          selectItem={selectItem}
          selectElement={selectElement}
          onChange={changeItemProp}
        />
      </TabPane>
    </Tabs>
  );
};

export default RateFrame;
