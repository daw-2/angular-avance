import { createAction, createReducer, on, props } from '@ngrx/store';
import { House } from '../models/house';

export const add = createAction('[Cart] Add', props<House>());

const initialState: House[] = [];

export const cartReducer = createReducer(
  initialState,
  on(add, (state, house) => {
    // const copy = [ ...state ];
    // copy.push(house);

    return [ ...state, house ];
  }),
);
