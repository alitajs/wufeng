import React from 'react';
import {
  SaveOutlined,
  EyeOutlined,
  DownloadOutlined,
  CloudUploadOutlined,
  EditOutlined,
  ClearOutlined,
  HistoryOutlined,
  LeftSquareOutlined,
  RightCircleOutlined,
  FormOutlined,
  AppstoreAddOutlined,
  // DeleteOutlined,
  // LoadingOutlined,
} from '@ant-design/icons';
import { Tooltip, Button } from 'antd';
import './index.less';

const classPrefix = `wf-head`;

function Header() {
  function onSave() {
    // console.log('onSave');
  }
  function onShow() {
    // console.log('onShow');
  }
  function onDownload() {
    // console.log('onDownload');
  }
  function onPublish() {
    // console.log('onPublish');
  }
  function onModify() {
    // console.log('onModify');
  }
  function onHistory() {
    // console.log('onHistory');
  }
  const menuItem = [
    {
      title: '保存',
      icon: <SaveOutlined />,
      onClick: onSave,
      size: 'large',
    },
    {
      title: '查看',
      icon: <EyeOutlined />,
      onClick: onShow,
      size: 'large',
    },
    {
      title: '下载',
      icon: <DownloadOutlined />,
      onClick: onDownload,
      size: 'large',
    },
    {
      title: '发布',
      icon: <CloudUploadOutlined />,
      onClick: onPublish,
      size: 'large',
    },
    {
      title: '修改',
      icon: <EditOutlined />,
      onClick: onModify,
      size: 'large',
    },
    {
      title: '清除',
      icon: <ClearOutlined />,
      onClick: onSave,
      size: 'large',
    },
    {
      title: '历史画板',
      icon: <HistoryOutlined />,
      onClick: onHistory,
      size: 'large',
    },
  ];
  const otherItem = [
    {
      title: '上一步',
      icon: <LeftSquareOutlined />,
      onClick: onSave,
    },
    {
      title: '下一步',
      icon: <RightCircleOutlined />,
      onClick: onSave,
    },
    {
      title: '编辑',
      icon: <FormOutlined />,
      onClick: onSave,
    },
    {
      title: '其他功能',
      icon: <AppstoreAddOutlined />,
      onClick: onSave,
    },
  ];
  return (
    <>
      <div className={classPrefix}>
        <div className="logo" />
        <ul className="menu">
          {/* 数据操作过程中按钮的loading状态 */}
          {/* <LoadingOutlined /> */}
          {/* 历史数据中一个是清除画板，一个是删除历史数据DeleteOutlined */}
          {/* <DeleteOutlined /> */}
          {/* 保存，查看，下载，发布，修改，清除，历史数据 */}
          {menuItem.map((item, index) => {
            const child = (
              <Tooltip placement="bottom" title={item.title}>
                <Button
                  type="text"
                  size="large"
                  disabled={!item.onClick}
                  onClick={item.onClick}
                  icon={item.icon}
                />
              </Tooltip>
            );
            return <li key={index.toString()}>{child}</li>;
          })}
        </ul>
        <ul className="menu menu-left">
          {/* 上一步，下一步，编辑 ，其他功能 */}
          {otherItem.map((item, index) => {
            const child = (
              <Tooltip placement="bottom" title={item.title}>
                <Button
                  type="text"
                  size="large"
                  disabled={!item.onClick}
                  onClick={item.onClick}
                  icon={item.icon}
                />
              </Tooltip>
            );
            return <li key={index.toString()}>{child}</li>;
          })}
        </ul>
      </div>
    </>
  );
}
export default Header;
