import React from 'react';
import type { FC } from 'react';
import AntdSwitch from 'antd/lib/switch';
import FormItem from './FormItem';
import 'antd/lib/switch/style/index';

const Switch: FC = (props) => {
  return (
    <FormItem {...props}>
      <AntdSwitch />
    </FormItem>
  );
};
export default Switch;
