import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './slices/ApiSlice.js'

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
})
