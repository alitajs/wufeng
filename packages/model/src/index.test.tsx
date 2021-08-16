import dva from 'dva';
import wufengModel from './';

describe('wufeng.model', () => {
  const item = {
    id: 534429,
    type: 'BaseText',
    props: {
      title: '文本',
      titleStyle: {
        fontSize: 15,
        color: 'black',
      },
    },
    propTypes: {
      title: 'string',
      titleStyle: 'style',
    },
    defaultProps: {},
    style: {},
  };
  const sourceData = [
    {
      type: '基本组件',
      data: [item],
    },
  ];
  const app = dva() as any;
  app.model(wufengModel);
  app.router(() => <div />);
  app.start();

  it('initSourceData', () => {
    // eslint-disable-next-line
    app._store.dispatch({
      type: 'wufeng/initSourceData',
      payload: {
        sourceData,
      },
    });
    // eslint-disable-next-line
    const state = app._store.getState();
    expect(state?.wufeng?.sourceData).toEqual(sourceData);
  });

  it('showItem', () => {
    // eslint-disable-next-line
    app._store.dispatch({
      type: 'wufeng/showItem',
      payload: item,
    });
    // eslint-disable-next-line
    const state = app._store.getState();
    expect(state?.wufeng?.showItemData).toEqual(item);
  });
  // TODO: 等逻辑跑通，再补充测试用例
});
