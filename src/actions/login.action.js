import { SET_ERROR, SET_LOGIN, SET_LOGOUT } from "../action-types/action-types";

import axios from "axios";

const setLoginState = (loginData) => ({
  type: SET_LOGIN,
  payload: loginData,
});

export const setError = (data) => ({
  type: SET_ERROR,
  payload: data,
});

const logOutAction = () => ({
  type: SET_LOGOUT,
});

export const loginUser = (data) => (dispatch) => {
  axios
    .post(`https://alkemapi.indusnettechnologies.com/api/employee/login`, data)
    .then((res) => {
      console.log(res);
      dispatch(setLoginState(res.data.token));
    })
    .catch((err) => {
      // console.log(err.response.data.errors.password);
      dispatch(setError(err.response.data.errors.password));
    });
};

export const logout_user = () => (dispatch) => {
  localStorage.clear();
  dispatch(logOutAction());
};
