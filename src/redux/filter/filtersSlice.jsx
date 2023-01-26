import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    updateFilter: (_, action) => action.payload,
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;