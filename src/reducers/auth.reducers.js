import { SET_ERROR, SET_LOGIN, SET_LOGOUT } from "../action-types/action-types";

export const initialState = {
  token: "",
  isError: false,
  isLogin: false,
  errormessage: "",
};

export const authReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN:
      return {
        ...store,
        token: payload,
        isError: false,
        isLogin: true,
        errormessage: "",
      };
    case SET_ERROR:
      return {
        ...store,
        isError: !store.isError,
        errormessage: payload,
      };
    case SET_LOGOUT:
      return {
        ...store,
        token: "",
        isLogin: false,
      };
    default:
      return store;
  }
};
