import { Product } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  cartItems: Product[];
  selectedColor: string;
  totalPrice: number;
}

const initialState: InitialState = {
  cartItems: [],
  totalPrice: 0,
  selectedColor: "",
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_PRODUCT(state, action: PayloadAction<Product>) {
      const isExist = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (isExist) return;

      const newProduct: Product = {
        ...action.payload,
        quantity: 1, // Initialize quantity to 1
        selectedColor: state.selectedColor || action.payload.selectedColor,
        createdAt:
          action.payload.createdAt ||
          new Date(action.payload.createdAt).toISOString(),
      };

      state.cartItems.push(newProduct);
      state.selectedColor = "";
    },

    UPDATE_PRODUCT_COLOR(state, action: PayloadAction<string>) {
      state.selectedColor = action.payload;
    },

    INCREASE_QUANTITY(state, action: PayloadAction<string>) {
      const product = state.cartItems.find((pro) => pro.id === action.payload);

      if (product) {
        // Ensure quantity is not undefined before incrementing
        product.quantity = (product.quantity || 1) + 1;
      }
    },

    DECREASE_QUANTITY(state, action: PayloadAction<string>) {
      const product = state.cartItems.find((pro) => pro.id === action.payload);

      if (product) {
        // Ensure quantity is not undefined and only decrease if greater than 1
        if ((product.quantity || 1) > 1) {
          product.quantity = (product.quantity || 1) - 1;
        } else {
          // Optionally remove the product when quantity is 1 and decreasing
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
    DELETE_PRODUCT(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        (pro) => pro.id !== action.payload
      );
    },
    CALC_TOTAL_PRICE(state) {
      state.totalPrice = state.cartItems.reduce((total, item) => {
        return total + item.price * (item.quantity || 1);
      }, 0);
    },
  },
});

export const {
  ADD_PRODUCT,
  UPDATE_PRODUCT_COLOR,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  DELETE_PRODUCT,
  CALC_TOTAL_PRICE,
} = CartSlice.actions;

export default CartSlice.reducer;
