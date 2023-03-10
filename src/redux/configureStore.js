import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userSlice from "./reducer/userAuth/userSlice";
import vehicleSlice from "./reducer/vehicles/vehicleSlice";

const rootReducer = combineReducers({
  user: userSlice,
  vehicle: vehicleSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store