export const addtoCart = (product) => {
    return {
      type: "ADD_TO_CART",
      payload: {
        product: product,
        quantity: 1,
        updateCartTotal: false
      },
    };
  };
  
  export const removeCart = (product) => {
    return {
      type: "REMOVE_CARTITEM",
      payload: product,
    };
  };
  
  export const updateCart = (product, qty) => {
    return {
      type: "UPDATE_CART",
      payload: {
        product: product,
        quantity: qty,
      },
    };
  };