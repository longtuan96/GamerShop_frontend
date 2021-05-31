import * as types from "../constants/user.constants";
const initialState = {
  users: [],
  currentUser: {},
  totalPageNum: 1,
  selectedUser: {},
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case types.USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.USER_UPDATE_FAILURE:
      console.log("Error in update user!!=>", payload);
      return { ...state, loading: false };

    case types.USER_DELETE_REQUEST:
      return { ...state, loading: true };
    case types.USER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.USER_DELETE_FAILURE:
      console.log("Error in delete user!!=>", payload);
      return { ...state, loading: false };

    case types.USER_TOPUP_REQUEST:
      return { ...state, loading: true };
    case types.USER_TOPUP_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.USER_TOPUP_FAILURE:
      console.log("Error in topup!!=>", payload);
      return { ...state, loading: false };

    case types.USER_ADDTOFAVORITE_REQUEST:
      return { ...state, loading: true };
    case types.USER_ADDTOFAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.USER_ADDTOFAVORITE_FAILURE:
      console.log("Error in add favorite!!=>", payload);
      return { ...state, loading: false };

    case types.USER_REMOVEFROMFAVORITE_REQUEST:
      return { ...state, loading: true };
    case types.USER_REMOVEFROMFAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.USER_REMOVEFROMFAVORITE_FAILURE:
      console.log("Error in remove favorite!!=>", payload);
      return { ...state, loading: false };

    case types.USER_GETCURRENT_REQUEST:
      return { ...state, loading: true };
    case types.USER_GETCURRENT_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        loading: false,
      };
    case types.USER_GETCURRENT_FAILURE:
      console.log("Error in get current user!!=>", payload);
      return { ...state, loading: false };

    case types.USER_GETALL_REQUEST:
      return { ...state, loading: true };
    case types.USER_GETALL_SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case types.USER_GETALL_FAILURE:
      console.log("Error in get all users!!=>", payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default userReducer;
