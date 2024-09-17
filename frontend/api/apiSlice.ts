import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type incomeDto = { id: number; amount: number; details: string; date: Date };
export type createIncomeDto = { amount: number; details: string; date: Date };
export type updateIncomeDto = { id: number; data: { amount: number; details: string; date: Date } };

export type createFixedIncomeDto = { amount: number; details: string; periodicity: number };

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5085/api/",
    }),
    tagTypes: ["Income", "FixedIncome"],
    endpoints: (builder) => ({
        //Income endpoints
        getIncomesByUserId: builder.query({
            query: (userId: number) => `income/user/${userId}`,
            providesTags: ["Income"],
        }),
        getIncomesById: builder.query({
            query: (Id: number) => `income/${Id}`,
        }),
        createIncome: builder.mutation({
            query: (incomeData: createIncomeDto) => ({
                url: "income",
                method: "POST",
                body: incomeData,
            }),
            invalidatesTags: ["Income"],
        }),
        updateIncome: builder.mutation({
            query: (incomeData: updateIncomeDto) => ({
                url: `income/${incomeData.id}`,
                method: "PUT",
                body: incomeData.data,
            }),
        }),
        deleteIncome: builder.mutation({
            query: (Id: number) => ({
                url: `income/${Id}`,
                method: "DELETE",
            }),
        }),
        //Fixed Income endpoints
        getFixedIncomesByUserId: builder.query({
            query: (userId) => `fixedincome/user/${userId}`,
            providesTags: ["FixedIncome"],
        }),
        createFixedIncome: builder.mutation({
            query: (fixedIncomeData: createFixedIncomeDto) => ({
                url: "fixedincome",
                method: "POST",
                body: fixedIncomeData,
            }),
            invalidatesTags: ["FixedIncome"],
        }),
    }),
});

export const {
    useGetIncomesByUserIdQuery,
    useLazyGetIncomesByIdQuery,
    useCreateIncomeMutation,
    useUpdateIncomeMutation,
    useDeleteIncomeMutation,

    useGetFixedIncomesByUserIdQuery,
    useCreateFixedIncomeMutation,
} = apiSlice;
