# wufeng module

无锋的数据流

```
// umi 中使用 plugn-dva 的情况，其他情况可以自行获取 app 对象
import { getApp } from '@@/plugin-dva/dva';
import wufengModel from 'wufeng-model';

const app = getApp();
app.model(wufengModel);
```