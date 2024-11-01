import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  filter: string;
}

const initialState: InitialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    SET_PRODUCT_FILTER(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { SET_PRODUCT_FILTER } = filterSlice.actions;

export default filterSlice.reducer;
