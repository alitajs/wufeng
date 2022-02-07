import { wufengController } from '@wufengteam/core';
import { Input } from './BuiltInInputs';
import { Select } from './BuiltInInputs';
import { Switch } from './BuiltInInputs';
import { InputNumber } from './BuiltInInputs';
import { DatePicker } from './BuiltInInputs';
import { Slider } from './BuiltInInputs';
import { Radio } from './BuiltInInputs';

const defaultLabels = {
  children: '内容',
  type: '类型',
  size: '字体大小',
  inputNumber: '数字输入框',
  date: '选择日期',
  slider: '滑动输入条',
  title: '标题',
  fieldProps: '文本属性',
  fieldProps2: '第二个文本属性',
  placeholder: '提示文字',
  required: '必填判断',
  List: '选择框标题',
  positionType: '表单方向样式(horizontal || vertical)',
};
wufengController.pushLabels(defaultLabels, 'zh-CN');
// 方便组件注册
// (window as any).wufeng = wufeng;
wufengController.registerInput(Input, { name: 'string', type: 'string' });
wufengController.registerInput(Select, { name: 'select', type: 'select' });
wufengController.registerInput(Switch, { name: 'bool', type: 'bool' });
wufengController.registerInput(InputNumber, { name: 'number', type: 'number' });
wufengController.registerInput(DatePicker, { name: 'DateString', type: 'DateString' });
wufengController.registerInput(Slider, { name: 'slider', type: 'slider' });
wufengController.registerInput(Radio, { name: 'boolean', type: 'boolean' });

export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';
export { default as WFPreviewFrame } from './PreviewFrame';
export { default as DataSource } from './DataSource';
export { default as RateFrame } from './RateFrame';
export { default as Header } from './Header';
export { default as Card } from './Card';

export * from './utils';
export * from '@alitajs/dnd';
export * from '@wufengteam/types';
