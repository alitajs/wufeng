import { WuFeng } from './WuFeng';

const wufeng = new WuFeng();
WuFeng.singletonInstance = wufeng;
export { wufeng as wufengController };

export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';
export { default as DataSource } from './DataSource';
export { default as EditorStyle } from './EditorStyle';
export { default as Header } from './Header';

export * from './utils';
export * from '@alitajs/dnd';
export * from '@wufeng/types';
