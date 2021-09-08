import React from 'react';
import type { FC } from 'react';
import AntdRadio from 'antd/lib/radio';
import FormItem from './FormItem';
import 'antd/lib/radio/style/index';

const Radio: FC = (props) => {
  return (
    <FormItem {...props}>
      <AntdRadio.Group>
        <AntdRadio value={1}>是</AntdRadio>
        <AntdRadio value={2}>否</AntdRadio>
      </AntdRadio.Group>
    </FormItem>
  );
};
export default Radio;
