export default {

  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  INCREMENT: (state, index) => {
    state.cart[index].quantity += 1;
  },
  DECREMENT: (state, index) => {
    if (state.cart[index].quantity > 1) {
      state.cart[index].quantity -= 1;
    }
  },
  SET_CART: (state, product) => {
    let isProductExists = false;
    if (state.cart.length) {
      // eslint-disable-next-line array-callback-return
      state.cart.map((item) => {
        if (item.article === product.article) {
          isProductExists = true;
          // eslint-disable-next-line no-param-reassign
          item.quantity += 1;
        }
      });
      if (!isProductExists) {
        state.cart.push(product);
      }
    } else {
      state.cart.push(product);
    }
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1);
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_DESKTOP: (state) => {
    state.isDesktop = true;
    state.isMobile = false;
  },
};
