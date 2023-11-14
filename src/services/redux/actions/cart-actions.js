const addToCartAction = (state, action) => {
  const newItem = action.payload;
  console.log('state:', newItem);
  state.cart = [...state.cart, ...newItem];
};
const removeFromCartAction = (state, action) => {
  const removeFromCart = state.cart.filter(
    item => item.key !== action.payload.key,
  );
  state.cart = removeFromCart;
};
const quantityIncrementAction = (state, action) => {
  console.log('Payload:', state);
  let newCart = [...state.cart];
  state.cart = newCart.map(item => {
    if (item.key == action.payload.key) {
      return {
        ...item,
        quantity: item.quantity + 1,
      };
    }
    return item;
  });
};
const quantityDecrementAction = (state, action) => {
  console.log(action, state);
  const itemInCart = state.cart.find(item => item.key === action.payload.key);
  console.log(itemInCart);
  if (itemInCart.quantity == 1) {
    const removeFromCart = state.cart.filter(
      item => item.key !== action.payload.key,
    );
    state.cart = removeFromCart;
  } else {
    itemInCart.quantity--;
  }
};
export {
  addToCartAction,
  removeFromCartAction,
  quantityIncrementAction,
  quantityDecrementAction,
};
