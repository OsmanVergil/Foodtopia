import { createSlice } from '@reduxjs/toolkit';
import { cartItem } from '../../types';
import type { PayloadAction } from '@reduxjs/toolkit';

interface cartSliceProps {
  products: cartItem[];
  totalPrice: number;
}

const initialState: cartSliceProps = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<cartItem>) {
      let index = 0;

      if (
        state.products.find((product, ind) => {
          if (product.id === action.payload.id) {
            index = ind;
            return true;
          }
        })
      ) {
        state.products[index].qty++;
      } else {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          imageUrl: action.payload.imageUrl,
          price: action.payload.price,
          qty: 1,
        });
      }

      state.totalPrice += action.payload.price;
    },

    removeProduct(state, action: PayloadAction<cartItem>) {
      state.products.forEach((product, ind) => {
        if (product.id === action.payload.id) {
          if (product.qty > 1) product.qty--;
          else state.products.splice(ind, 1);
        }
      });

      state.totalPrice -= action.payload.price;
    },

    removeAll(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, removeProduct, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
