import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  values: null,
  searchedValues: null
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    getData: (state, action) => {
      state.values = action.payload;
    }
  }
});

export default dataSlice.reducer;
export const { getData } = dataSlice.actions;
