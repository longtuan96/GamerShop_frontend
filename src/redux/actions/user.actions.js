import * as types from "../constants/user.constants";
import api from "../api";
import { toast } from "react-toastify";

const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: types.USER_GETCURRENT_REQUEST, payload: null });
  try {
    const res = await api.get(`/user/me`);
    dispatch({
      type: types.USER_GETCURRENT_SUCCESS,
      payload: res.data.data.user,
    });
  } catch (error) {
    dispatch({ type: types.USER_GETCURRENT_FAILURE, payload: error.message });
  }
};

const getAllUsers = () => async (dispatch) => {
  dispatch({ type: types.USER_GETALL_REQUEST, payload: null });
  try {
    const res = await api.get(`/user`);
    dispatch({
      type: types.USER_GETALL_SUCCESS,
      payload: res.data.data.users,
    });
  } catch (error) {
    dispatch({ type: types.USER_GETALL_FAILURE, payload: error.message });
  }
};

const updateCurrentUser = (data) => async (dispatch) => {
  dispatch({ type: types.USER_UPDATE_REQUEST, payload: null });
  try {
    const res = await api.put(`/user`, data);
    dispatch({
      type: types.USER_UPDATE_SUCCESS,
      payload: res.data.data.newUser,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({ type: types.USER_UPDATE_FAILURE, payload: error.message });
  }
};

const topUpCurrentUser = (data) => async (dispatch) => {
  dispatch({ type: types.USER_TOPUP_REQUEST, payload: null });
  try {
    const res = await api.put(`/user/topup`, data);
    dispatch({
      type: types.USER_TOPUP_SUCCESS,
      payload: res.data.data.message,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({ type: types.USER_TOPUP_FAILURE, payload: error.message });
  }
};

const addToFavorite = (gameId) => async (dispatch) => {
  dispatch({ type: types.USER_ADDTOFAVORITE_REQUEST, payload: null });
  try {
    const res = await api.post(`/user/favorite`, { game: gameId });
    dispatch({
      type: types.USER_ADDTOFAVORITE_SUCCESS,
      payload: res.data.data.message,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({
      type: types.USER_ADDTOFAVORITE_FAILURE,
      payload: error.message,
    });
  }
};

const removeFromFavorite = (gameId) => async (dispatch) => {
  dispatch({ type: types.USER_REMOVEFROMFAVORITE_REQUEST, payload: null });
  try {
    const res = await api.delete(`/user/favorite/${gameId}`);
    dispatch({
      type: types.USER_REMOVEFROMFAVORITE_SUCCESS,
      payload: res.data.data.message,
    });
    dispatch(userActions.getCurrentUser());
  } catch (error) {
    dispatch({
      type: types.USER_REMOVEFROMFAVORITE_FAILURE,
      payload: error.message,
    });
  }
};

const updateUser = (id, data) => async (dispatch) => {
  dispatch({ type: types.USER_UPDATE_REQUEST, payload: null });
  try {
    await api.put(`/user/admin/${id}`, data);
    dispatch({
      type: types.USER_UPDATE_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.USER_UPDATE_FAILURE, payload: error.message });
  }
};

const deleteUser = (id) => async (dispatch) => {
  dispatch({ type: types.USER_DELETE_REQUEST, payload: null });
  try {
    await api.delete(`/user/admin/${id}`);
    dispatch({
      type: types.USER_DELETE_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.USER_DELETE_FAILURE, payload: error.message });
  }
};

export const userActions = {
  updateCurrentUser,
  getCurrentUser,
  topUpCurrentUser,
  addToFavorite,
  removeFromFavorite,
  getAllUsers,
  updateUser,
  deleteUser,
};
