import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { House } from '../models/house';

export interface AppState {
  cart: HouseItem[],
}

type Mode = 'rent' | 'buy';
// enum Mode {
//   Rent = 'rent',
//   Buy = 'buy'
// }
export interface HouseItem {
  house: House,
  mode: Mode,
}

// Modifier le state
export const add = createAction('[Cart] Add', props<HouseItem>());
export const remove = createAction('[Cart] Delete', props<{ id: number }>());

// Filtrer le state
export const has = (id: number) => createSelector(
  (state: AppState) => state.cart,
  (cart) => cart.find(houseItem => houseItem.house.id === id) !== undefined
);

export const selectMode = (mode: Mode) => createSelector(
  (state: AppState) => state.cart,
  (cart) => cart.filter(houseItem => houseItem.mode === mode)
    .map(houseItem => houseItem.house)
);

const initialState: HouseItem[] = [];

// Gestion du state
export const cartReducer = createReducer(
  initialState,
  on(add, (state, houseItem) => {
    // const copy = [ ...state ];
    // copy.push(houseItem);

    return [ ...state, houseItem ];
  }),
  on(remove, (state, { id }) => state.filter(houseItem => houseItem.house.id !== id))
);
