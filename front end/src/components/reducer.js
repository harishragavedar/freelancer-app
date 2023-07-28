// redux/reducers.js

import { ADD_JOB_TO_CART, REMOVE_JOB_FROM_CART } from "./actions";

const initialState = {
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_JOB_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((jobId) => jobId !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
