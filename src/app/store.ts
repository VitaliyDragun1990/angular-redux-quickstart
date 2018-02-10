import { Action } from 'redux';
import { CounterActions } from './app.actions';

export interface IAppStore {
  count: number;
}

export const INITIAL_STATE: IAppStore = {
  count: 0,
};

export function rootReducer(lastState: IAppStore, action: Action): IAppStore {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return { count: lastState.count + 1 };
    case CounterActions.DECREMENT:
      return { count: lastState.count - 1 };
  }

  // We don't care about any other actions right now
  return lastState;
}
