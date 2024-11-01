import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/cart/cartSlice";
import FilterSlice from "./features/filter/filterSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartSlice,
      filter: FilterSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
