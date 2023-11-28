import { createSlice } from "@reduxjs/toolkit";
import counterAction from "../Cake/cakeSlice";

const initialState = {
  iceCream: 20,
};

export const iceCreamSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addIceCream: (state) => {
      state.iceCream += 1;
    },
    orderIceCream: (state) => {
      state.iceCream -= 1;
    },
    extraReducers: (builder) => {
      builder.addCase(counterAction.increment, (state) => {
        state.iceCream--;
      });
    },
  },
});

export const { addIceCream, orderIceCream } = iceCreamSlice.actions;

export default iceCreamSlice.reducer;
