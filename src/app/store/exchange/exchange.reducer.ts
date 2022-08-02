import {createReducer, on} from '@ngrx/store';
import {add} from './exchange.actions';

export const initialState = [];

export const exchangeReducer = createReducer(
  initialState,
  on(add, (state, action): any => {
    return [...state, {...action.payload, id: (state.length + 1)}];
  }),
);
