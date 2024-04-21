export const reducer = (state, action) => {

    if (action.type === "setActive") {
      return { ...state, activeCalculateBtn: !state.activeCalculateBtn };
    }
  
    if (action.type === "ADD_TO_CART") {
  
      let checkItem = state.cartItems.find((itm)=>itm.product.name === action.payload.product.name)
  
      if(checkItem){
        checkItem.quantity++
        return {...state, cartValue: state.cartValue + Number(action.payload.quantity),
          cartTotal: state.cartTotal + action.payload.product.buy[0],}
      }else
      {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          cartValue: state.cartValue + Number(action.payload.quantity),
          cartTotal: state.cartTotal + action.payload.product.buy[0],
        };
      }
    }
  
    if (action.type === "UPDATE_CART") {
      return {
        ...state,
        cartItems: state.cartItems.filter((itm) =>
          itm.product.name === action.payload.product.name
            ? (itm.quantity = action.payload.quantity)
            : itm.quantity
        ),
        cartValue: state.cartItems.reduce((prevQty,item)=> prevQty + Number(item.quantity),0)
      };
    }
  
    if(action.type === 'GET_TOTAL'){
      
      let grandTotal = state.cartItems.reduce((prevTotal,item)=> prevTotal + (item.product.buy[0]*item.quantity),0)
      
       return {...state, cartTotal:grandTotal}
    }
  
    if (action.type === "REMOVE_CARTITEM") {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (itm) => itm.product.name !== action.payload.product.name
        ),
        cartValue: state.cartValue - action.payload.quantity,
        cartTotal:
          state.cartTotal -
          action.payload.quantity * action.payload.product.buy[0],
      };
    }
  
    if(action.type === 'SHOW_LAYER'){
      return {...state, layerShow:true}
    }
  
    if(action.type === 'CLOSE_LAYER'){
      return {...state, layerShow:false}
    }
  
    if(action.type === 'ADD_USERINFO'){
      return state
    }
    return state;
  };