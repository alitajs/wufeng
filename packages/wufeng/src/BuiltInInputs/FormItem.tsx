import React from 'react';
import type { FC } from 'react';
import Form from 'antd/lib/form';

const FormItem: FC = ({ children, ...other }) => {
  return <Form.Item {...other}>{children}</Form.Item>;
};
export default FormItem;
