import {createSlice} from '@reduxjs/toolkit';
import {addToProductAction} from '../actions/product-actions';

const initialState = {
  product: [],
};

export const productReducer = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToProduct: addToProductAction,
  },
});

export const {addToProduct} = productReducer.actions;

export default productReducer.reducer;
