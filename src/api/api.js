const baseURL = 'http://localhost:3000/api';
// REACT_APP_BASE_URL=http://localhost:3000/api

const setAuthToken = ({ headers }) => localStorage.setItem('token', headers.get('Authorization'));

const unSetAuthToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('authUser');
};

const register = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ api_user: user.user }),
});

const login = (user) => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ api_user: user.user }),
});

const vehicleAvailability = (vehicle) => ({
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(vehicle),
});

const addbooking = (booking) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
  },
  body: JSON.stringify(booking),
});

const removeBooking = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const logout = () => ({
  method: 'DELETE',
  headers: { Authorization: localStorage.getItem('token') },
});

const api = {
  register: async (user) => {
    const response = await fetch(`${baseURL}/signup`, {
      ...register({ user }),
    });

    const { status: code } = response;

    if (code === 200) setAuthToken(response);
    const data = await response.json();
    return data;
  },

  login: async (user) => {
    const response = await fetch(`${baseURL}/login`, {
      ...login({ user }),
    });

    const { status: code } = response;

    if (code === 200) {
      setAuthToken(response);
      const { data, message } = await response.json();
      return {
        user: data,
        status: 'successful',
        message,
      };
    }

    if (code === 401) {
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Unauthorized, Login or Register',
        message: 'Login failed, Please check your email and password',
      };
    }

    return null;
  },

  logout: async () => {
    const response = await fetch(`${baseURL}/logout`, {
      ...logout(),
    });

    const { status: code } = response;

    if (code === 200) {
      unSetAuthToken();
      const data = await response.json();
      return {
        user: {},
        status: 'successful',
        message: data.message,
      };
    }

    if (code === 500) {
      unSetAuthToken();
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Expired, Login or Register',
        message: 'User session has expored',
      };
    }

    return null;
  },

  userDetails: async () => {
    const response = await fetch(`${baseURL}/users`, {
      headers: { Authorization: localStorage.getItem('token') },
    });

    const { status: code } = response;

    if (code === 200) {
      const currentuser = await response.json();
      return {
        user: currentuser,
        status: 'successful',
        error: null,
        message: 'User is authenticated',
      };
    }

    if (code === 401) {
      unSetAuthToken();
      return {
        user: {},
        status: 'unsuccessful',
        error: 'Expired, Login or Register',
        message: 'User session has expired',
      };
    }

    return null;
  },

  listVehicles: async () => {
    const response = await fetch(`${baseURL}/vehicles`);
    const vehicles = await response.json();
    return vehicles;
  },

  vehicleDetails: async (id) => {
    const response = await fetch(`${baseURL}/vehicles/${id}`);
    const vehicle = await response.json();
    return vehicle;
  },

  bookVehicle: async (id, newBooking) => {
    const response = await fetch(`${baseURL}/users/${id}/bookings`, {
      ...addbooking(newBooking),
    });
    const booking = await response.json();
    return booking;
  },

  deleteBooking: async (userId, bookingId) => {
    const response = await fetch(`${baseURL}/users/${userId}/bookings/${bookingId}`, {
      ...removeBooking(),
    });
    const data = await response.json();
    return data;
  },

  checkVehicleAvailability: async (VehicleId, vehicle) => {
    const response = await fetch(`${baseURL}/vehicles/${VehicleId}/avalability`, {
      ...vehicleAvailability({ vehicle }),
    });
    const data = await response.json();
    return data;
  },
};

export default api;
