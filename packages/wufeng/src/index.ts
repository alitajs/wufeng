import { WuFeng, findItem } from './WuFeng';
import { Input } from './BuiltInInputs';
import { Select } from './BuiltInInputs';
import { Switch } from './BuiltInInputs';
import { InputNumber } from './BuiltInInputs';
import { DatePicker } from './BuiltInInputs';
import { Slider } from './BuiltInInputs';
import { Radio } from './BuiltInInputs';

const wufeng = new WuFeng();
WuFeng.singletonInstance = wufeng;

wufeng.registerInput(Input, { name: 'string', type: 'string' });
wufeng.registerInput(Select, { name: 'select', type: 'select' });
wufeng.registerInput(Switch, { name: 'bool', type: 'bool' });
wufeng.registerInput(InputNumber, { name: 'number', type: 'number' });
wufeng.registerInput(DatePicker, { name: 'DateString', type: 'DateString' });
wufeng.registerInput(Slider, { name: 'slider', type: 'slider' });
wufeng.registerInput(Radio, { name: 'boolean', type: 'boolean' });

export { wufeng as wufengController };
export { findItem };
export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';
export { default as DataSource } from './DataSource';
export { default as RateFrame } from './RateFrame';
export { default as Header } from './Header';
export { default as Card } from './Card';

export * from './utils';
export * from '@alitajs/dnd';
export * from '@wufeng/types';
export * from './Card';
