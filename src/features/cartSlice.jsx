import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    incrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) item.quantity += 1
    },
    decrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item && item.quantity > 1) item.quantity -= 1
    }
  }
})

export const { addItem, removeItem, incrementQty, decrementQty } = cartSlice.actions
export default cartSlice.reducer
