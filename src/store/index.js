// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { reducers } from "../reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   reducers,
//   composeEnhancers(applyMiddleware(thunk))
// );

import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "reducers",
  storage,
};
const presistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(
  presistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);
export { persistor, store };
