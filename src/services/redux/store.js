import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/user-reducer';
import CartReducer from './reducers/cart-reducer';
import WishlistReducer from './reducers/wishlist-reducer';
import productReducer from './reducers/product-reducer';
export const store = configureStore({
  reducer: {
    userReducer,
    cart: CartReducer,
    wishlist: WishlistReducer,
    product: productReducer,
  },
});
