// 只是为了激活 dva plugin
import type { Reducer } from 'alita';

export interface GlobalModelState {
  name: string;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {};
  reducers: {
    save: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    name: '',
  },

  effects: {},
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default GlobalModel;
