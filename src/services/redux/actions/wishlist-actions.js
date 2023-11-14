const addToWishlistAction = (state, action) => {
  state.wishlist.push(action.payload);
};
const removeFromWishlistAction = (state, action) => {
  return {
    ...state,
    wishlist: state.wishlist.filter(item => item.key !== action.payload.key),
  };
};
export {addToWishlistAction, removeFromWishlistAction};
