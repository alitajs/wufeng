import React from 'react';
import type { FC } from 'react';
import AntdInput from 'antd/lib/input';
import FormItem from './FormItem';
import 'antd/lib/input/style/index';

const Input: FC = (props) => {
  return (
    <FormItem {...props}>
      <AntdInput />
    </FormItem>
  );
};
export default Input;
