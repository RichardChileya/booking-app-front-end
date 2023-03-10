import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import bookingSlice from "./reducer/bookings/bookingSlice";
import userSlice from "./reducer/userAuth/userSlice";
import vehicleSlice from "./reducer/vehicles/vehicleSlice";

const rootReducer = combineReducers({
  user: userSlice,
  vehicles: vehicleSlice,
  bookings: bookingSlice,
});

const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  },
);

export default store