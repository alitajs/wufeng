import React from 'react';
import type { FC } from 'react';
import AntdSlider from 'antd/lib/slider';
import FormItem from './FormItem';
import 'antd/lib/slider/style/index';

const Slider: FC = (props) => {
  return (
    <FormItem {...props}>
      <AntdSlider />
    </FormItem>
  );
};
export default Slider;
