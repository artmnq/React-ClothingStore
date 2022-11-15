import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import items from './slices/itemsSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    items,
  },
});
