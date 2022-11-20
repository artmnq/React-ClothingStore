import { createAsyncThunk } from '@reduxjs/toolkit';
import { Item } from './types';
import axios from 'axios';

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
