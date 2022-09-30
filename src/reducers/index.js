import { combineReducers } from "redux";
import { authReducer } from "./auth.reducers";
import { deshboardReducer } from "./deshboard.reducers";

export const reducers = combineReducers({
    token_data:authReducer,
    desh_data:deshboardReducer
})