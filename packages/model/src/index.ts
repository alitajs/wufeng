// import { gPage } from "@/services/api";
import { addComponent, moveComponent, deleteComponent } from './data_utils';
import type { Effect, Reducer, Subscription } from './connect';
// TODO: test error
// import keymaster from "keymaster";

export interface WuFengModelState {
  views: any[];
  showPage: number;
  cneterscale: number;
  sourceData: any[];
  hidevalue: string;
  components: any[];
  showItemData: any;
}

export interface WuFengModelType {
  namespace: 'wufeng';
  state: WuFengModelState;
  effects: {
    initSourceData: Effect;
    keyDeleteItem: Effect;
    delItem: Effect;
    addchildrenCom: Effect;
    addItem: Effect;
    keyMoveItem: Effect;
    initComponents: Effect;
    changeScale: Effect;
    changeHide: Effect;
    dPage: Effect;
    moveItem: Effect;
    showItem: Effect;
    changeItemProp: Effect;
    gPage: Effect;
    changeShowPage: Effect;
    downloadCode: Effect;
  };
  reducers: {
    save: Reducer<WuFengModelState>;
  };
  subscriptions: {
    setup: Subscription;
    keyEvent: Subscription;
  };
}

const WuFengModel: WuFengModelType = {
  namespace: 'wufeng',

  state: {
    views: [],
    showPage: 0,
    cneterscale: 75,
    sourceData: [],
    hidevalue: 'true',
    components: [],
    showItemData: {},
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(() => {
        dispatch({
          type: 'initComponents',
        });
      });
    },
    keyEvent({ dispatch }) {
      // keymaster("up", () => {
      //   dispatch({
      //     type: "keyMoveItem",
      //     payload: {
      //       type: "up",
      //     },
      //   });
      // });
      // keymaster("down", () => {
      //   dispatch({
      //     type: "keyMoveItem",
      //     payload: {
      //       type: "down",
      //     },
      //   });
      // });
      // keymaster("backspace,del,delete", () => {
      //   dispatch({
      //     type: "keyDeleteItem",
      //   });
      // });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *initSourceData({ payload }, { call, put, select }) {
      yield put({
        type: 'save',
        payload: {
          sourceData: payload.sourceData,
        },
      });
    },
    *keyDeleteItem({ payload }, { call, put, select }) {
      const { showItemData } = yield select((state: any) => state.wufeng);
      if (showItemData && showItemData.id) {
        yield put({
          type: 'delItem',
          payload: {
            id: showItemData.id,
          },
        });
      }
    },
    *keyMoveItem({ payload }, { call, put, select }) {
      const { showItemData } = yield select((state: any) => state.wufeng);
      const { type } = payload;
      if (showItemData && showItemData.id) {
        let nextIndex = 0;
        if (type === 'up' && showItemData.index !== 0) {
          nextIndex = showItemData.index - 1 < 0 ? 0 : showItemData.index - 1;
        } else if (type === 'down' && showItemData.index !== showItemData.maxLength - 1) {
          nextIndex = showItemData.index + 1;
        }
        if (!nextIndex && nextIndex !== 0) return;
        yield put({
          type: 'moveItem',
          payload: {
            dragIndex: showItemData.index,
            hoverIndex: nextIndex,
            parentId: showItemData.parentId,
          },
        });
        yield put({
          type: 'save',
          payload: {
            showItemData: { ...showItemData, index: nextIndex },
          },
        });

        // yield put({
        //   type: "delItem",
        //   payload: {
        //     id: showItemData.id,
        //   },
        // });
      }
    },
    *initComponents({ payload }, { call, put, select }) {
      const { views, showPage } = yield select((state: any) => state.wufeng);
      let pageIndex = showPage;
      if (!views || views.length === 0 || views.length < showPage || !views[showPage].components) {
        views.push({
          name: 'home',
          components: [],
        });
        pageIndex = 0;
      }
      yield put({
        type: 'save',
        payload: {
          views,
          showPage: pageIndex,
        },
      });
    },
    *changeScale({ payload }, { call, put, select }) {
      yield put({
        type: 'save',
        payload: {
          cneterscale: payload,
        },
      });
    },
    *changeHide({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          hidevalue: payload,
        },
      });
    },
    *delItem({ payload }, { put, select }) {
      const { views, showPage, showItemData } = yield select((state: any) => state.wufeng);
      const { components } = views[showPage];
      const data = deleteComponent(components, payload.id);
      if (showItemData && showItemData.id === payload.id) {
        yield put({
          type: 'save',
          payload: {
            components: data,
            showItemData: {},
          },
        });
      } else {
        yield put({
          type: 'save',
          payload: {
            components: data,
          },
        });
      }
    },
    *addchildrenCom({ payload }, { call, put, select }) {
      const { sourceData, views, showPage } = yield select((state: any) => state.wufeng);
      let { components } = views[showPage];
      const { index, parentId, item } = payload;

      function findComAndAddComponent(arrs: any[], pId: string, i: any) {
        arrs.map((arr) => {
          const { childrenCom } = arr;
          if (arr.id === pId) {
            const itemIndex = index === 'max' ? childrenCom.length : index;
            const data = addComponent(sourceData, childrenCom, i, itemIndex);
            // eslint-disable-next-line
            arr.childrenCom = data.centerData;
          } else if (childrenCom && childrenCom.length > 0) {
            // eslint-disable-next-line
            arr.childrenCom = findComAndAddComponent(childrenCom, pId, i);
          }
          return arr;
        });
        return arrs;
      }
      components = findComAndAddComponent(components, parentId, item);
      views[showPage].components = components;
      yield put({
        type: 'save',
        payload: {
          views,
        },
      });
    },
    *addItem({ payload }, { call, put, select }) {
      const { parentId, item, index } = payload;
      if (parentId && parentId !== 'wufengmainroot') {
        yield put({
          type: 'addchildrenCom',
          payload,
        });
        return;
      }
      const { sourceData, views, showPage } = yield select((state: any) => state.wufeng);
      const { components } = views[showPage];
      const data = addComponent(
        sourceData,
        components,
        item,
        index === 'max' ? components.length : index,
      );
      views[showPage].components = data.centerData;
      yield put({
        type: 'save',
        payload: {
          views,
        },
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex, parentId } = payload;
      const { views, showPage } = yield select((state: any) => state.wufeng);
      const { components } = views[showPage];
      function findComMobeItem(arrs: any[], pId: string, dIndex: number, hIndex: number) {
        if (pId !== 'wufengmainroot') {
          arrs.map((item) => {
            const { childrenCom } = item;
            if (item.id === pId) {
              const data = moveComponent(item.childrenCom, dIndex, hIndex);
              // eslint-disable-next-line
              item.childrenCom = data;
            } else if (childrenCom && childrenCom.length > 0) {
              // eslint-disable-next-line
              item.childrenCom = findComMobeItem(childrenCom, pId, dIndex, hIndex);
            }
            return item;
          });
          return arrs;
        }
        return moveComponent(arrs, dragIndex, hoverIndex);
      }
      views[showPage].components = findComMobeItem(components, parentId, dragIndex, hoverIndex);
      yield put({
        type: 'save',
        payload: {
          views,
        },
      });
    },
    *showItem({ payload }, { put }) {
      const data = { ...payload };
      yield put({
        type: 'save',
        payload: {
          showItemData: data,
        },
      });
    },
    *changeItemProp({ payload }, { call, put, select }) {
      const { id, key, value } = payload;
      if (!id) return;
      const { views, showPage } = yield select((state: any) => state.wufeng);
      let { components } = views[showPage];
      function findComAndChangeProp(arrs: any[], i: any, k: any, v: any) {
        arrs.map((item) => {
          const { childrenCom } = item;
          let newValue: any;
          if (item.id === i) {
            switch (item.component.propTypes[k]) {
              case 'bool':
                newValue = payload.value === 'true';
                break;
              case 'number':
                newValue = parseInt(v, 10);
                break;
              case 'array':
                newValue = JSON.parse(v);
                break;
              default:
                break;
            }
            // eslint-disable-next-line
            item.component.props[k] = newValue;
          } else if (childrenCom && childrenCom.length > 0) {
            // eslint-disable-next-line
            item.childrenCom = findComAndChangeProp(childrenCom, i, k, v);
          }
          return item;
        });
        return arrs;
      }
      components = findComAndChangeProp(components, id, key, value);
      yield put({
        type: 'save',
        payload: {
          components,
        },
      });
    },
    *gPage({ payload }, { call, put, select }) {
      const { views } = yield select((state: any) => state.wufeng);
      const getPageName = (view: any[], name: string): string => {
        const check = views.filter((item: any) => item.name === name);
        if (check.length) {
          return getPageName(view, `${name}_`);
        }
        return name;
      };
      // eslint-disable-next-line
      payload.name = getPageName(views, payload.name);
      views.push(payload);
      yield put({
        type: 'save',
        payload: {
          views,
        },
      });
    },
    *dPage({ payload }, { call, put, select }) {
      const { views, showPage } = yield select((state: any) => state.wufeng);
      if (views.length === 1) {
        alert('至少要保留一个页面');
      } else {
        const newViews: any[] = [];
        views.map((item: any) => {
          if (item.name !== payload.name) {
            newViews.push(item);
          }
          return item;
        });

        yield put({
          type: 'save',
          payload: {
            showPage: showPage - 1 < 0 ? 0 : showPage - 1,
            views: newViews,
          },
        });
      }
    },
    *changeShowPage({ payload }, { call, put, select }) {
      const { views, showPage } = yield select((state: any) => state.wufeng);
      let showPageNew = showPage;
      views.map((item: any, index: number) => {
        if (item.name === payload.name) {
          showPageNew = index;
        }
        return item;
      });
      yield put({
        type: 'save',
        payload: {
          showPage: showPageNew,
        },
      });
    },
    *downloadCode({ payload }, { call, put, select }) {
      // TODO: 用数据响应还是model继承？
      // const { views } = yield select((state: any) => state.wufeng);
      // const response = yield call(gPage, { views });
      // if (response && response.filePath) {
      //   notification.success({
      //     message: "将在新页面中下载，请关闭弹窗拦截",
      //     description: "如果没有正确下载，请联系开发人员",
      //   });
      //   window.open(`http://47.107.34.177:3000/download/?filePath=${response.filePath}`);
      // }
      // yield put({
      //   type: "save",
      //   payload: {
      //     text: response || "no data",
      //   },
      // });
    },
  },
};

export default WuFengModel;
