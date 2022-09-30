import { SET_DASHBOARD } from "../action-types/action-types";

export const initialState = {
  api_data: "",
};

export const deshboardReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case SET_DASHBOARD:
      return {
        ...store,
        api_data: payload,
      };

    default:
      return store;
  }
};
