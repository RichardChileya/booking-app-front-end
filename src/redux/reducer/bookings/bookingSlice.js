import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { vehicleAvailability } from '../vehicles/vehicleSlice';
import api from '../../../api/api';

const BOOK_VEHICLE = 'BOOK_VEHICLE';
const GET_BOOKINGS = 'GET_BOOKINGS';
const DELETE_BOOKING = 'DELETE_BOOKING';

const initialState = {
  bookings: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  message: '',
  error: null,
};

export const bookVehicle = createAsyncThunk(BOOK_VEHICLE,
  async ({ userId, bookings }) => {
    try {
      return await api.bookVehicle(userId, bookings);
    } catch (error) {
      return error.message;
    }
  });

export const getBooking = createAsyncThunk(
  GET_BOOKINGS,
  async (userId) => {
    try {
      return await api.fetchBookings(userId);
    } catch (error) {
      return error.message;
    }
  },
);
export const deleteBooking = createAsyncThunk(
  DELETE_BOOKING,
  async ({ userId, bookingId }) => {
    try {
      return await api.deleteBooking(userId, bookingId);
    } catch (error) {
      return error.message;
    }
  },
);

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    resetBookingState: (state) => ({
      ...state,
      bookings: [],
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
      .addCase(bookVehicle.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(bookVehicle.fulfilled, (state, action) => ({
        ...state,
        bookings: [
          ...(action.payload.status === '00' ? [action.payload.data] : []),
          ...state.bookings,
        ],
        message: action.payload.message,
        status: action.payload.status === '00' ? 'successful' : 'failed',
        error: action.payload.error,
      }))
      .addCase(bookVehicle.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(getBooking.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getBooking.fulfilled, (state, action) => ({
        ...state,
        bookings: action.payload,
        message: action.payload.message,
        status: 'successful',
      }))
      .addCase(getBooking.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }))
      .addCase(deleteBooking.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(deleteBooking.fulfilled, (state, action) => ({
        ...state,
        bookings: [
          ...state.bookings.filter(
            (booking) => booking.id !== action.payload.data.id,
          ),
        ],
        message: action.payload.message,
        status: 'succeeded',
      }))
      .addCase(deleteBooking.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export const vehiclesBookings = (state) => state.bookings.bookings;
export const { resetBookingState, setMessageEmpty, setStatusIdle } = bookingSlice.actions;
export const allStatus = (state) => state.bookings.status;
export const allMessages = (state) => state.bookings.message;

export default bookingSlice.reducer;
