// redux/actions.js

// Action Types
export const ADD_JOB_TO_CART = "ADD_JOB_TO_CART";
export const REMOVE_JOB_FROM_CART = "REMOVE_JOB_FROM_CART";

// Action Creators
export const addJobToCart = (jobId) => ({
  type: ADD_JOB_TO_CART,
  payload: jobId,
});

export const removeJobFromCart = (jobId) => ({
  type: REMOVE_JOB_FROM_CART,
  payload: jobId,
});
