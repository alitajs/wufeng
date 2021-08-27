import { WuFeng } from './WuFeng';

export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';
export { default as DataSource } from './DataSource';

const wufeng = new WuFeng();
WuFeng.singletonInstance = wufeng;

export { wufeng as wufengController };
export * from '@alitajs/dnd';
export * from '@wufeng/types';
