import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../api/api';

const LIST_VEHICLES = 'LIST_VEHICLES';
const VEHICLE_DETAILS = 'VEHICLE_DETAILS';
const VEHICLE_AVAILSBILITY = 'VEHICLE_AVAILSBILITY';

const initialState = {
  vehicles: [],
  vehicle: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const listVehicles = createAsyncThunk(LIST_VEHICLES, async () => {
  try {
    return await api.listVehicles();
  } catch (error) {
    return error.message;
  }
});

export const vehicleDetails = createAsyncThunk(VEHICLE_DETAILS, async (id) => {
  try {
    return await api.vehicleDetails(id);
  } catch (error) {
    return error.message;
  }
});

export const vehicleAvailability = createAsyncThunk(VEHICLE_AVAILSBILITY,
  async ({ vehicleId, vehicle }) => {
    try {
      return await api.checkVehicleAvailability(vehicleId, vehicle);
    } catch (error) {
      return error.message;
    }
  });

const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    resetVehicleState: (state) => ({
      ...state,
      vehicle: {},
      status: 'idle',
      message: '',
      error: null,
    }),
    resetVehiclesState: (state) => ({
      ...state,
      Vehicles: [],
      status: 'idle',
      message: '',
      error: null,
    }),
    setMessageEmpty: (state, action) => ({
      ...state,
      message: action.payload,
    }),
    setStatusIdle: (state) => ({
      ...state,
      status: 'idle',
      message: '',
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(vehicleAvailability.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(vehicleAvailability.fulfilled, (state, action) => ({
        ...state,
        vehicles: [
          action.payload.data,
          ...state.vehicles.filter(({ id }) => id !== action.payload.data.id),
        ],
        message: action.payload.message,
        status: 'successful',
      }))
      .addCase(vehicleAvailability.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(vehicleDetails.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(vehicleDetails.fulfilled, (state, action) => ({
        ...state,
        vehicle: action.payload,
        status: 'successful',
      }))
      .addCase(vehicleDetails.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(listVehicles.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(listVehicles.fulfilled, (state, action) => ({
        ...state,
        vehicles: action.payload.vehicles,
        status: 'successful',
      }))
      .addCase(listVehicles.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const {
  resetVehicleState, resetVehiclesState, setMessageEmpty, setStatusIdle,
} = vehicleSlice.actions;
export const vehicles = (state) => state.vehicles.vehicles;
export const vehicle = (state) => state.vehicles.vehicle;
export const allStatus = (state) => state.vehicless.status;
export const allMessages = (state) => state.vehicles.message;

export default vehicleSlice.reducer;
