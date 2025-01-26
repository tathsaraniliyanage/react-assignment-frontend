import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Item } from "../models/Item";

export const initialState: Item[] = [];

const api = axios.create({
  baseURL: "http://localhost:3000/item",
});

// Async Thunks
export const saveItem = createAsyncThunk("item/saveItem", async (item: Item, { rejectWithValue }) => {
  try {
    const response = await api.post("/add", item);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteItem = createAsyncThunk("item/deleteItem", async (id: string, { rejectWithValue }) => {
  try {
    const response = await api.delete(`/delete/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const updateItem = createAsyncThunk("item/updateItem", async (item: Item, { rejectWithValue }) => {
  try {
    const response = await api.put(`/update/${item.id}`, item);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getItems = createAsyncThunk("item/getItems", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/view");
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

// Slice
const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      state.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveItem.fulfilled, (state, action) => {
        console.log("Save fulfilled:", action.payload);
        state.push(action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const index = state.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) state[index] = action.payload;
      })
      .addCase(getItems.fulfilled, (_, action) => {
        return action.payload;
      });
  },
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;



















































