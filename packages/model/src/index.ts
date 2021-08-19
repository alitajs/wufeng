// import { gPage } from "@/services/api";
import { addComponent, moveComponent, deleteComponent } from './data_utils';
import type { Effect, Reducer, Subscription } from './connect';
// TODO: test error
// import keymaster from "keymaster";

export interface WuFengModelState {
  sourceData: any[];
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
    moveItem: Effect;
    showItem: Effect;
    changeItemProp: Effect;
    downloadCode: Effect;
  };
  reducers: {
    save: Reducer<WuFengModelState>;
  };
  subscriptions: {
    keyEvent: Subscription;
  };
}

const WuFengModel: WuFengModelType = {
  namespace: 'wufeng',

  state: {
    sourceData: [],
    components: [],
    showItemData: {},
  },
  subscriptions: {
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
    *delItem({ payload }, { put, select }) {
      const { components, showItemData } = yield select((state: any) => state.wufeng);
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
      const { sourceData, components } = yield select((state: any) => state.wufeng);
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
      yield put({
        type: 'save',
        payload: {
          components: findComAndAddComponent(components, parentId, item),
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
      const { sourceData, components } = yield select((state: any) => state.wufeng);
      const data = addComponent(
        sourceData,
        components,
        item,
        index === 'max' ? components.length : index,
      );
      yield put({
        type: 'save',
        payload: {
          components: data.centerData,
        },
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex, parentId } = payload;
      const { components } = yield select((state: any) => state.wufeng);
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
      yield put({
        type: 'save',
        payload: {
          components: findComMobeItem(components, parentId, dragIndex, hoverIndex),
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
      const { components } = yield select((state: any) => state.wufeng);
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
      yield put({
        type: 'save',
        payload: {
          components: findComAndChangeProp(components, id, key, value),
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
