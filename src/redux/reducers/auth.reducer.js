import axios from "axios";
import api from "../api";
import * as types from "../constants/auth.constants";
const initialState = {
  user: {},

  accessToken: "",
  loading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, loading: false };
    case types.REGISTER_FAILURE:
      return { ...state, loading: false };

    case types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      console.log(">>>>>>", payload);
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("role", payload.user.role);

      return {
        ...state,
        user: payload.user,
        accessToken: payload.accessToken,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };

    case types.LOGOUT_REQUEST:
      return { ...state, loading: true };
    case types.LOGOUT_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;