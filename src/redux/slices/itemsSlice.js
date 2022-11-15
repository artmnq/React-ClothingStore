import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async (params) => {
  const { order, currentPage, sortBy, search, category } = params;
  const { data } = await axios.get(
    `https://6362b47537f2167d6f6b31c3.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
  );
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

const itemsSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectItemData = (state) => state.items;

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
