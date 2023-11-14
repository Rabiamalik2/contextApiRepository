import {createSlice} from '@reduxjs/toolkit';
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from '../actions/wishlist-actions';

const initialState = {
  wishlist: [],
};

export const WishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: addToWishlistAction,
    removeFromWishlist: removeFromWishlistAction,
  },
});

export const {addToWishlist, removeFromWishlist} = WishlistReducer.actions;

export default WishlistReducer.reducer;
