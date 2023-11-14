import {createSlice} from '@reduxjs/toolkit';
import {
  addToCartAction,
  removeFromCartAction,
  quantityIncrementAction,
  quantityDecrementAction,
} from '../actions/cart-actions';

const initialState = {
  cart: [],
};

export const CartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: addToCartAction,
    removeFromCart: removeFromCartAction,
    quantityIncrement: quantityIncrementAction,
    quantityDecrement: quantityDecrementAction,
  },
});

export const {addToCart, removeFromCart, quantityIncrement, quantityDecrement} =
  CartReducer.actions;

export default CartReducer.reducer;
