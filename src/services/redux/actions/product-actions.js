const addToProductAction = (state, action) => {
  state.product.push(action.payload);
};
export {addToProductAction};
