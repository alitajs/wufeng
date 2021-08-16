import { getApp } from '@@/plugin-dva/dva';
import wufengModel from 'wufeng-model';

// TODO: 这个时机找的不是很正确，先跑通逻辑
setTimeout(() => {
  const app = getApp();
  app.model(wufengModel);
}, 500);
