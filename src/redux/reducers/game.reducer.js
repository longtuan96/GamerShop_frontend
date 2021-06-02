import * as types from "../constants/game.constants";
const initialState = {
  addedGame: {},
  searchGames: [],
  genreGames: [],
  genrePageTitle: "",
  allGames: [],
  deals: [],
  games: [],
  game: {},
  selectedGame: {},
  totalPage: 0,
  loading: true,
};

const randomNumber = (someNumber) => {
  return Math.floor(Math.random() * someNumber);
};

const gameReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GAME_GETALL_REQUEST:
    case types.GAME_GETSINGLE_REQUEST:
    case types.GAME_GET_REQUEST:
    case types.GAME_DELETE_REQUEST:
    case types.GAME_UPDATE_REQUEST:
    case types.GAME_ADD_REQUEST:
    case types.GAME_SEARCH_REQUEST:
    case types.GAME_GETDEALS_REQUEST:
    case types.GAME_GETGENRE_REQUEST:
      return { ...state, loading: true };

    case types.GAME_ADD_SUCCESS:
      return {
        ...state,
        addedGame: payload,
        loading: false,
      };
    case types.GAME_GET_SUCCESS:
      return {
        ...state,
        games: payload,
        game: payload[randomNumber(payload.length)],
        loading: false,
      };
    case types.GAME_GETSINGLE_SUCCESS:
      return {
        ...state,
        selectedGame: payload,
        loading: false,
      };

    case types.GAME_SEARCH_SUCCESS:
      return {
        ...state,
        searchGames: payload,
        loading: false,
      };
    case types.GAME_GETGENRE_SUCCESS:
      return {
        ...state,
        genreGames: payload.games,
        genrePageTitle: payload.title,
        totalPages: payload.totalPages,
        loading: false,
      };
    case types.GAME_GETDEALS_SUCCESS:
      return {
        ...state,
        deals: payload,
        loading: false,
      };
    case types.GAME_GETALL_SUCCESS:
      return {
        ...state,
        allGames: payload.games,
        totalPages: payload.totalPages,
        loading: false,
      };
    case types.GAME_DELETE_SUCCESS:
    case types.GAME_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.GAME_ADD_FAILURE:
      console.log("Error in add Game!!=>", payload);
      return { ...state, loading: false };
    case types.GAME_GETSINGLE_FAILURE:
      console.log("Error in Get single Game!!=> ", payload);
      return { ...state, loading: false };
    case types.GAME_GETALL_FAILURE:
      console.log("Error in Get all Game for admin!!=> ", payload);
      return { ...state, loading: false };
    case types.GAME_GET_FAILURE:
      console.log("Error in Get all Games!!=>");
      return { ...state, loading: false };
    case types.GAME_UPDATE_FAILURE:
      console.log("Error in update Game!!=>", payload);
      return { ...state, loading: false };
    case types.GAME_DELETE_FAILURE:
      console.log("Error in delete Game!!=>", payload);
      return { ...state, loading: false };
    case types.GAME_SEARCH_FAILURE:
      console.log("Error in search Game!!=>", payload);
      return { ...state, loading: false };
    case types.GAME_GETDEALS_FAILURE:
      console.log("Error in deals Game!!=>", payload);
      return { ...state, loading: false };
    case types.GAME_GETGENRE_FAILURE:
      console.log("Error in genre Games!!=>", payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default gameReducer;
