import { WuFeng, findItem } from './WuFeng';
import { Input } from './BuiltInInputs';
import { Select } from './BuiltInInputs';
// import { DformSwitch }  from './BuiltInInputs';

const wufeng = new WuFeng();
WuFeng.singletonInstance = wufeng;

wufeng.registerInput(Input, { name: 'string', type: 'string' });
wufeng.registerInput(Select, { name: 'select', type: 'select' });
// wufeng.registerInput(DformSwitch, { name: 'bool' })

export { wufeng as wufengController };
export { findItem };
export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';
export { default as DataSource } from './DataSource';
export { default as RateFrame } from './RateFrame';
export { default as Header } from './Header';

export * from './utils';
export * from '@alitajs/dnd';
export * from '@wufeng/types';
