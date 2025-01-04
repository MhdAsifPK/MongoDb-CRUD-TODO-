import { ApiSlice } from "./ApiSlice";

const userApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    registerUser: build.mutation({
      query: (data) => ({
        url: "api/users",
        method: "POST",
        body: data,
      }),
    }),
    authUser: build.mutation({
      query: (data) => ({
        url: "api/users/auth",
        method: "POST",
        body: data,
      }),
    }),
    logoutUser: build.mutation({
      query: (data) => ({
        url: "api/users/logout",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation,useAuthUserMutation } = userApiSlice;
