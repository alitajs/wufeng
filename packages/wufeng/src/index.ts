import { WuFeng } from './WuFeng';

export { default as WFPage } from './Page';
export { default as WFComponentsWare } from './ComponentsWare';
export { default as WFPhoneFrame } from './PhoneFrame';

const wufeng = new WuFeng();
WuFeng.singletonInstance = wufeng;

export { wufeng };
export * from '@alitajs/dnd';
export * from './types';
