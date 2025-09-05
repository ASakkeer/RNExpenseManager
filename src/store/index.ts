import { configureStore } from '@reduxjs/toolkit';
import { MMKV } from 'react-native-mmkv';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

// Create MMKV storage instance
const storage = new MMKV();

// Custom storage for redux-persist
const reduxStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

// Root reducer combining all slices
const rootReducer = combineReducers({
  app: appReducer,
  // Add your other reducers here when you create them
  // expenses: expensesReducer,
  // categories: categoriesReducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['app'], // Add the reducers you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
