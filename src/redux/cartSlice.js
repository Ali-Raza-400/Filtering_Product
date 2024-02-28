import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { id: Math.random(), name: "laptop", unitPrice: 1000, quantity: 1, price: 1000 },
    { id: Math.random(), name: "mobile", unitPrice: 500, quantity: 1, price: 500 },
    { id: Math.random(), name: "mouse", unitPrice: 200, quantity: 1, price: 200 },
  ],
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
        let price=0
        const item = state.products.find((item) => item.id === payload);
        item.quantity++;
        // Update the total price for the product based on its quantity and price
        item.price = item.quantity * item.unitPrice;
    },
    
    decrement: (state, {payload}) => {
        const item = state.products.find((item) => item.id === payload);
        item.quantity--
    },
    removeProduct: (state, { payload }) => {
        state.products = state.products.filter((item) => item.name !== payload);
      },
    updateTotalAmount: (state) => {
       let amount = 0;
       let total = 0;
       state.products.forEach((item) => {
         amount += item.quantity;
         total += item.quantity * item.price;
       });
        state.amount = amount;
        state.total = total;
    }
  },

});

// Action creators are generated for each case reducer function
export const { increment, decrement, removeProduct,updateTotalAmount } = cartSlice.actions;

export default cartSlice.reducer;
