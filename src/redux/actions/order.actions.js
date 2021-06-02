import api from "../api";
import * as types from "../constants/order.constants";
import { userActions } from "./user.actions";

const getCurrentOrder = () => async (dispatch) => {
  dispatch({ type: types.ORDER_GETCURRENT_REQUEST, payload: null });

  try {
    const res = await api.get("/order");
    dispatch({
      type: types.ORDER_GETCURRENT_SUCCESS,

      payload: res.data.data.order,
    });
  } catch (error) {
    dispatch({ type: types.ORDER_GETCURRENT_FAILURE, payload: error.message });
  }
};

const getCurrentAllOrder = () => async (dispatch) => {
  dispatch({ type: types.ORDER_GETCURRENTALL_REQUEST, payload: null });

  try {
    const res = await api.get("/order/all");
    dispatch({
      type: types.ORDER_GETCURRENTALL_SUCCESS,

      payload: res.data.data.orders,
    });
  } catch (error) {
    dispatch({
      type: types.ORDER_GETCURRENTALL_FAILURE,
      payload: error.message,
    });
  }
};

const addItemCurrentOrder = (gameId) => async (dispatch) => {
  dispatch({ type: types.ORDER_ADDITEM_REQUEST, payload: null });

  try {
    await api.put("/order/add", { game: gameId });
    dispatch({
      type: types.ORDER_ADDITEM_SUCCESS,

      payload: null,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({ type: types.ORDER_ADDITEM_FAILURE, payload: error.message });
  }
};
const removeItemCurrentOrder = (gameId) => async (dispatch) => {
  dispatch({ type: types.ORDER_REMOVEITEM_REQUEST, payload: null });

  try {
    await api.delete(`/order/remove/${gameId}`);
    dispatch({
      type: types.ORDER_REMOVEITEM_SUCCESS,

      payload: null,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({ type: types.ORDER_REMOVEITEM_FAILURE, payload: error.message });
  }
};

const paymentOrder = (total) => async (dispatch) => {
  dispatch({ type: types.ORDER_PAYMENT_REQUEST, payload: null });

  try {
    await api.put(`/order/payment/${total}`);
    dispatch({
      type: types.ORDER_PAYMENT_SUCCESS,

      payload: null,
    });
    dispatch(userActions.getCurrentUser());
    dispatch(orderActions.getCurrentOrder());
  } catch (error) {
    dispatch({ type: types.ORDER_PAYMENT_FAILURE, payload: error.message });
  }
};

export const orderActions = {
  getCurrentOrder,
  addItemCurrentOrder,
  removeItemCurrentOrder,
  paymentOrder,
  getCurrentAllOrder,
};
