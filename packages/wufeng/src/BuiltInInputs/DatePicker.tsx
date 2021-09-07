import React from 'react';
import type { FC } from 'react';
import AntdDatePicker from 'antd/lib/date-picker';
import AntdSpace from 'antd/lib/space';
import FormItem from './FormItem';
import 'antd/lib/date-picker/style/index';

const DatePicker: FC = () => {
  return (
    <FormItem>
      <AntdSpace direction="vertical">
        <AntdDatePicker />
      </AntdSpace>
    </FormItem>
  );
};
export default DatePicker;
