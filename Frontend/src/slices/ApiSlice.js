import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: ""}),
  tagTypes:["Todo"],
  endpoints: () => ({}),
})

// code splitting documentation