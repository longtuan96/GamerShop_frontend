import * as types from "../constants/game.constants";

import api from "../api";
import { useParams } from "react-router";

const getGames = () => async (dispatch) => {
  dispatch({ type: types.GAME_GET_REQUEST, payload: null });
  try {
    const res = await api.get("/game");
    dispatch({ type: types.GAME_GET_SUCCESS, payload: res.data.data.games });
  } catch (error) {
    dispatch({ type: types.GAME_GET_FAILURE, payload: error.message });
  }
};

const getAllGames = () => async (dispatch) => {
  dispatch({ type: types.GAME_GETALL_REQUEST, payload: null });
  try {
    const res = await api.get("/game/admin?isDeleted=true&&isDeleted=false");
    dispatch({ type: types.GAME_GETALL_SUCCESS, payload: res.data.data.games });
  } catch (error) {
    dispatch({ type: types.GAME_GETALL_FAILURE, payload: error.message });
  }
};

const getSingleGame = (id) => async (dispatch) => {
  dispatch({ type: types.GAME_GETSINGLE_REQUEST, payload: null });
  try {
    const res = await api.get(`/game/${id}`);
    dispatch({
      type: types.GAME_GETSINGLE_SUCCESS,
      payload: res.data.data.game,
    });
  } catch (error) {
    dispatch({ type: types.GAME_GETSINGLE_FAILURE, payload: error.message });
  }
};

const addGame = (data) => async (dispatch) => {
  dispatch({ type: types.GAME_ADD_REQUEST, payload: null });
  try {
    const res = await api.post(`/game`, data);
    dispatch({
      type: types.GAME_ADD_SUCCESS,
      payload: res.data.data.game,
    });
  } catch (error) {
    dispatch({ type: types.GAME_ADD_FAILURE, payload: error.message });
  }
};

const updateGame = (id, data) => async (dispatch) => {
  dispatch({ type: types.GAME_UPDATE_REQUEST, payload: null });
  try {
    await api.put(`/game/${id}`, data);
    dispatch({
      type: types.GAME_UPDATE_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.GAME_UPDATE_FAILURE, payload: error.message });
  }
};
const deleteGame = (id) => async (dispatch) => {
  dispatch({ type: types.GAME_DELETE_REQUEST, payload: null });
  try {
    await api.delete(`/game/${id}`);
    dispatch({
      type: types.GAME_DELETE_SUCCESS,
      payload: null,
    });
  } catch (error) {
    dispatch({ type: types.GAME_DELETE_FAILURE, payload: error.message });
  }
};

const searchGame = (name) => async (dispatch) => {
  dispatch({ type: types.GAME_SEARCH_REQUEST, payload: null });
  try {
    const res = await api.post(`/game/search?name=${name}`);
    dispatch({
      type: types.GAME_SEARCH_SUCCESS,
      payload: res.data.data.games,
    });
  } catch (error) {
    dispatch({ type: types.GAME_SEARCH_FAILURE, payload: error.message });
  }
};

const getDealsGame = () => async (dispatch) => {
  dispatch({ type: types.GAME_GETDEALS_REQUEST, payload: null });
  try {
    const res = await api.post(`/game/deals`);
    dispatch({
      type: types.GAME_GETDEALS_SUCCESS,
      payload: res.data.data.games,
    });
  } catch (error) {
    dispatch({ type: types.GAME_GETDEALS_FAILURE, payload: error.message });
  }
};

export const gameActions = {
  getGames,
  getAllGames,
  getSingleGame,
  updateGame,
  deleteGame,
  addGame,
  searchGame,
  getDealsGame,
};
