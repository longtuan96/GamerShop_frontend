import * as types from "../constants/game.constants";
const initialState = {
  games: [],
  game: {},
  selectedGame: {},
  loading: true,
};

const randomNumber = (someNumber) => {
  return Math.floor(Math.random() * someNumber);
};

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GAME_GETALL_REQUEST:
      return { ...state, loading: true };
    case types.GAME_GETALL_SUCCESS:
      return {
        ...state,
        games: payload,
        game: payload[randomNumber(payload.length)],
        loading: false,
      };
    case types.GAME_GETALL_FAILURE:
      console.log("Error in Get all Games!!=>");
      return { ...state, loading: false };

    case types.GAME_GETSINGLE_REQUEST:
      return { ...state, loading: true };
    case types.GAME_GETSINGLE_SUCCESS:
      return {
        ...state,
        selectedGame: payload,
        loading: false,
      };
    case types.GAME_GETSINGLE_FAILURE:
      console.log("Error in Get single Game!!=> ", payload);
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default gameReducer;
