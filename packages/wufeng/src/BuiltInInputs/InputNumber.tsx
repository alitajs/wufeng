import React from 'react';
import type { FC } from 'react';
import AntdInputNumber from 'antd/lib/input-number';
import FormItem from './FormItem';
import 'antd/lib/input-number/style/index';

const InputNumber: FC = (props) => {
  return (
    <FormItem {...props}>
      <AntdInputNumber />
    </FormItem>
  );
};
export default InputNumber;
