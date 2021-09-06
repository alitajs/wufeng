import React from 'react';
import type { FC } from 'react';
import {
  SaveOutlined,
  EyeOutlined,
  DownloadOutlined,
  LeftSquareOutlined,
  RightCircleOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import { Grid, GridItem } from '@alita/react';
import { Wufeng as WuFengLogoImg } from '@alita/icons';
import './index.less';

const classPrefix = `wf-head`;

interface HeaderProps {
  /**
   * 保存
   */
  onSave?: () => void;
  /**
   * 预览
   */
  onShow?: () => void;
  /**
   * 下载
   */
  onDownload?: () => void;
  /**
   * 重做
   */
  onRedo?: () => void;
  /**
   * 撤销
   */
  onUndo?: () => void;
  /**
   * 其他
   */
  onOther?: () => void;
  /**
   * logo 如果没有，默认是 wufeng logo
   */
  logo?: string;
}

const defaultAction = (action: string) => () => console.log(`onClick:${action}`);

const Header: FC<HeaderProps> = ({
  onSave = defaultAction('onSave'),
  onShow = defaultAction('onShow'),
  onDownload = defaultAction('onDownload'),
  onUndo = defaultAction('onUndo'),
  onRedo = defaultAction('onRedo'),
  onOther = defaultAction('onOther'),
  logo,
}) => {
  const menuItem = [
    {
      title: '保存',
      type: 'onSave',
      icon: <SaveOutlined />,
      onClick: onSave,
      size: 'large',
    },
    {
      title: '预览',
      type: 'onShow',
      icon: <EyeOutlined />,
      onClick: onShow,
      size: 'large',
    },
    {
      title: '下载',
      type: 'onDownload',
      icon: <DownloadOutlined />,
      onClick: onDownload,
      size: 'large',
    },
  ];
  const otherItem = [
    {
      title: '撤销',
      type: 'onUndo',
      icon: <LeftSquareOutlined />,
      onClick: onUndo,
    },
    {
      title: '重做',
      type: 'onRedo',
      icon: <RightCircleOutlined />,
      onClick: onRedo,
    },
    {
      title: '其他功能',
      type: 'onOther',
      icon: <AppstoreAddOutlined />,
      onClick: onOther,
    },
  ];
  return (
    <Grid className={classPrefix} columns={4}>
      <GridItem span={3}>
        <ul className="menu">
          <li className="logo-box">
            {logo ? <img className="logo" src={logo} /> : <WuFengLogoImg />}
          </li>
          {menuItem.map((item) => (
            <li key={item.type}>
              <Tooltip placement="bottom" title={item.title}>
                <Button
                  type="text"
                  size="large"
                  disabled={!item.onClick}
                  onClick={item.onClick}
                  icon={item.icon}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </GridItem>
      <GridItem span={1}>
        <ul className="menu">
          {otherItem.map((item) => (
            <li key={item.type}>
              <Tooltip placement="bottom" title={item.title}>
                <Button
                  type="text"
                  size="large"
                  disabled={!item.onClick}
                  onClick={item.onClick}
                  icon={item.icon}
                />
              </Tooltip>
            </li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
};
export default Header;
