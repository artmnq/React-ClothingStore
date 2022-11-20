import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchItems } from './asyncActions';
import { ItemsSliceState, Status, Item } from './types';

const initialState: ItemsSliceState = {
  items: [],
  status: Status.LOADING,
};

const itemsSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
