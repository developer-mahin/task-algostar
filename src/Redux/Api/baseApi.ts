import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products" }),
  endpoints: (builder) => ({
    getProductQuery: builder.query({
      query: () => {
        return {
          url: "",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetProductQueryQuery } = baseApi;
