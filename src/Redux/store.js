import { reducer } from "./reducer";
import { createStore } from "redux";

const initialState = {
    activeCalculateBtn: true,
    cartValue: null,
    cartItems: [],
    cartTotal:0,
    layerShow: false, //not used
    userDetails:[]
  };

export const store = createStore(reducer, initialState);