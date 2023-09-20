import { createAction, createReducer, createSelector, on, props } from '@ngrx/store';
import { House } from '../models/house';

export interface AppState {
  cart: House[],
}

// Modifier le state
export const add = createAction('[Cart] Add', props<House>());
export const remove = createAction('[Cart] Delete', props<{ id: number }>());

// Filtrer le state
export const has = (id: number) => createSelector(
  (state: AppState) => state.cart,
  (cart) => cart.find(house => house.id === id) !== undefined
);

const initialState: House[] = [];

// Gestion du state
export const cartReducer = createReducer(
  initialState,
  on(add, (state, house) => {
    // const copy = [ ...state ];
    // copy.push(house);

    return [ ...state, house ];
  }),
  on(remove, (state, { id }) => state.filter(house => house.id !== id))
);
