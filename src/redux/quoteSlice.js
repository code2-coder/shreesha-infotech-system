import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  status: 'idle', // idle | loading | succeeded | failed
  error: null
};

const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    submitQuoteStart: (state) => {
      state.status = 'loading';
    },
    submitQuoteSuccess: (state, action) => {
      state.status = 'succeeded';
      state.quotes.push(action.payload);
      state.error = null;
    },
    submitQuoteFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    resetQuoteStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    }
  }
});

export const { submitQuoteStart, submitQuoteSuccess, submitQuoteFailure, resetQuoteStatus } = quoteSlice.actions;

export default quoteSlice.reducer;
