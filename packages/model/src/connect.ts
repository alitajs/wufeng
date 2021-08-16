import type { AnyAction } from 'redux';
import type { EffectsCommandMap, SubscriptionAPI } from 'dva';

export * from './index';

export interface Action<T = any> {
  type: T;
}

export type Reducer<S = any, A extends Action = AnyAction> = (state: S | undefined, action: A) => S;

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch<P = any, C = (payload: P) => void> = (action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export type Subscription = (api: SubscriptionAPI, done: Function) => void | Function;
