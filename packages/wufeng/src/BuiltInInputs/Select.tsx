import React from 'react';
import type { FC } from 'react';
import AntdSelect from 'antd/lib/select';
import FormItem from './FormItem';
import 'antd/lib/select/style/index';

const Select: FC = (props) => {
  const { Option } = AntdSelect;

  // TODO: ????????????
  const cityData = ['Hangzhou', 'Ningbo', 'Wenzhou'];

  return (
    <FormItem {...props}>
      <AntdSelect>
        {cityData.map((item) => {
          return (
            <>
              <Option key={item} value={item}>
                {item}
              </Option>
            </>
          );
        })}
      </AntdSelect>
    </FormItem>
  );
};
export default Select;
