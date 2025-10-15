import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: JSON.parse(localStorage.getItem("tripsPlans")) || [],
};

const saveToLocalStorage = (trips) => {
  localStorage.setItem("tripsPlans", JSON.stringify(trips));
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      console.log("adding " ,action.payload)
      state.trips.push(action.payload);
      saveToLocalStorage(state.trips);
    },
    setTrip: (state, action) => {
      state.trips = action.payload;
      saveToLocalStorage(state.trips);
    },
    editTrip: (state, action) => {
      const { id, updated } = action.payload;
      state.trips = state.trips.map((trip) => (trip.id == id ? updated : trip));
      saveToLocalStorage(state.trips);
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
      saveToLocalStorage(state.trips);
    },
  },
});

export const { setTrip, addTrip, editTrip, deleteTrip } = tripSlice.actions;
export default tripSlice.reducer;
