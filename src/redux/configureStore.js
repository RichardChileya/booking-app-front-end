import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userSlice from "./reducer/userAuth/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store