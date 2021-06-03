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
    case types.FACEBOOK_REQUEST:
      return { ...state, loading: true };
    case types.LOGOUT_REQUEST:
      return { ...state, loading: true };

    case types.LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("role", payload.user.role);
      localStorage.setItem("isAuthenticated", true);

      api.defaults.headers["authorization"] = "Bearer " + payload.accessToken;
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        accessToken: payload.accessToken,
        loading: false,
      };
    case types.FACEBOOK_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("role", payload.user.role);
      localStorage.setItem("isAuthenticated", true);
      api.defaults.headers["authorization"] = "Bearer " + payload.accessToken;

      return {
        ...state,
        user: payload.user,

        accessToken: payload.accessToken,
        loading: false,
      };
    case types.LOGIN_FAILURE:
      return { ...state, loading: false };

    case types.LOGOUT_SUCCESS:
      return { ...state, loading: false };
    case types.FACEBOOK_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default authReducer;
