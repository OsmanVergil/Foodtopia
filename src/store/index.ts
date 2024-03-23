import { combineReducers, configureStore } from '@reduxjs/toolkit';
import categoryReducer from './reducers/categorySlice.ts';
import cartReducer from './reducers/cartSlice.ts';

const rootReducer = combineReducers({
  category: categoryReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
