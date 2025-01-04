import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './slices/ApiSlice.js'
import authSlice from './slices/authSlice.js'

export const store = configureStore({
  reducer: {
    // rtk quwry setup
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    auth:authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
})
