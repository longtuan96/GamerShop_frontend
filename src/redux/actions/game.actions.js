import * as types from "../constants/game.constants";

import api from "../api";
import { useParams } from "react-router";

const getAllGames = () => async (dispatch) => {
  dispatch({ type: types.GAME_GETALL_REQUEST, payload: null });
  try {
    const res = await api.get("/game");
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

export const gameActions = { getAllGames, getSingleGame };
