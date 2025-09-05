import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  initialized: boolean;
  theme: 'light' | 'dark';
  isLoading: boolean;
}

const initialState: AppState = {
  initialized: false,
  theme: 'light',
  isLoading: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setInitialized: (state, action: PayloadAction<boolean>) => {
      state.initialized = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setInitialized, setTheme, setLoading } = appSlice.actions;
export default appSlice.reducer;
