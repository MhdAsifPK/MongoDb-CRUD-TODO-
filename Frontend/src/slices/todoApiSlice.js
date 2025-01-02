import { ApiSlice } from "./ApiSlice";

const todoApiSlice = ApiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query({
      query: () => ({
        url: "/api/todo",
      }),
      providesTags: ["Todo"],
    }),
    getTodo: build.query({
      query: (id) => ({
        url: `/api/todo/${id}`,
      }),
    }),
    addTodos: build.mutation({
      query: (data) => ({
        url: "/api/todo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
    deleteTodo: build.mutation({
      query: (id) => ({
        url: `/api/todo/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodos: build.mutation({
      query: (data) => ({
        url: `/api/todo/${data.id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodoMutation,
  useUpdateTodosMutation,
  useGetTodoQuery,
} = todoApiSlice;
