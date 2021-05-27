import * as types from "../constants/auth.constants";

import { toast } from "react-toastify";

import { routeActions } from "./route.actions";
import api from "../api";

const register = (formData) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/user/register", formData);
    dispatch({ type: types.REGISTER_SUCCESS, payload: null });
    dispatch(routeActions.redirect("/login"));
    toast.success(`Thank you for your registration, ${formData.name}!`);
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    toast.success(`Welcome ${name}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

export const authActions = {
  register,
  loginRequest,
};
