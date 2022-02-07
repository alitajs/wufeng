// import { wufengController } from '@wufengteam/core';
import Button from './Button';

(window as any).wufengController.registerComponent(Button, {
  name: `FactoryButton`,
  props: {
    fieldProps: '1221',
    required: false,
    placeholder: '请选择',
    title: '选择框',
    data: [
      { label: '是', value: 'yes' },
      { label: '否', value: 'no' },
    ],
  },
});
