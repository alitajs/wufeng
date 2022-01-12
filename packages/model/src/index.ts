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
    addItem: Effect;
    moveItem: Effect;
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
    *addItem({ payload }, { call, put, select }) {
      const { parentId, item, index } = payload;
      // TODO: addchildrenCom 的逻辑未验证
      if (parentId && parentId !== 'wufengmainroot') {
        yield put({
          type: 'addchildrenCom',
          payload,
        });
        return;
      }

      const { components } = yield select((state: any) => state.wufeng);
      const data = addComponent(components, item, index === 'max' ? components.length : index);
      yield put({
        type: 'save',
        payload: {
          components: data,
        },
      });
    },
    *moveItem({ payload }, { call, put, select }) {
      const { dragIndex, hoverIndex, dragItem, hoverItem, components } = payload;
      const dragParentId = dragItem.parentId;
      const hoverParentId = hoverItem.parentId;
      function findComMobeItem(
        arrs: any[],
        dpId: string,
        hpId: string,
        dIndex: number,
        hIndex: number,
        drag: any,
        hover: any,
      ) {
        if (dpId === hpId) {
          if (dpId && dpId !== 'wufengmainroot') {
            arrs.map((item) => {
              const { childrenCom } = item;
              if (item.id === dpId) {
                const data = moveComponent(item.childrenCom, dIndex, hIndex, drag, hover);
                // eslint-disable-next-line
                item.childrenCom = data;
              } else if (childrenCom && childrenCom.length > 0) {
                // eslint-disable-next-line
                item.childrenCom = findComMobeItem(
                  childrenCom,
                  dpId,
                  hpId,
                  dIndex,
                  hIndex,
                  drag,
                  hover,
                );
              }
              return item;
            });
            return arrs;
          }
          return moveComponent(arrs, dragIndex, hoverIndex, drag, hover);
        }
        // TODO: 不同 parentId 是的移动逻辑未实现
        return arrs;
      }
      yield put({
        type: 'save',
        payload: {
          components: findComMobeItem(
            components,
            dragParentId,
            hoverParentId,
            dragIndex,
            hoverIndex,
            dragItem,
            hoverItem,
          ),
        },
      });
      return { isMove: false };
    },
    *changeItemProp({ payload }, { call, put, select }) {
      const { id } = payload;
      const { components } = yield select((state: any) => state.wufeng);
      const findComAndChangeProp = (arrs: any[], i: any, value: any) => {
        const data = [...arrs];
        for (let key = 0; key <= data.length; ) {
          if (data[key].id === i) {
            data[key] = value;
            break;
          }
          key += 1;
        }
        return data;
      };
      yield put({
        type: 'save',
        payload: {
          components: findComAndChangeProp(components, id, payload),
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
