// src/store.ts

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slice';
import logger from './Middleware';

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(logger), 
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
