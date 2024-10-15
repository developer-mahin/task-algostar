import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getProductQuery: builder.query({
      query: (payload) => {
        let url;

        if (payload) {
          if (payload.category === "All") {
            url = "";
          } else {
            url = `/category/${payload.category}`;
          }
        }

        return {
          url: url ? url : "",
          method: "GET",
        };
      },
    }),

    getAllCategories: builder.query({
      query: () => {
        return {
          url: "/categories",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductQueryQuery, useGetAllCategoriesQuery } = baseApi;
