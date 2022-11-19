import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchItems = createAsyncThunk<
  Item[],
  Record<string, string>
>('items/fetchItems', async (params) => {
  const { order, currentPage, sortBy, search, category } = params;
  const { data } = await axios.get<Item[]>(
    `https://6362b47537f2167d6f6b31c3.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
  );
  return data;
});

type Item = {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: string[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface ItemsSliceState {
  items: Item[];
  status: Status;
}

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

export const selectItemData = (state: RootState) => state.items;

export const { setItems } = itemsSlice.actions;
export default itemsSlice.reducer;
