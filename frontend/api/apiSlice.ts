import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { logOut, refreshUserToken } from "../src/reducers/userReducers";

export type incomeDto = { id: number; amount: number; details: string; date: Date };
export type createIncomeDto = { amount: number; details: string; date: Date };
export type updateIncomeDto = { id: number; data: { amount: number; details: string; date: Date } };

export type fixedIncomeDto = { id: number; amount: number; details: string; periodicity: number };
export type createFixedIncomeDto = { amount: number; details: string; periodicity: number };
export type updateFixedIncomeDto = {
    id: number;
    data: { amount: number; details: string; periodicity: number };
};

export type createBudgetPlanDto = {
    amount: number;
    expenseCategoryId: number;
    periodicity: number;
};
export type updateBudgetPlanDto = {
    id: number;
    data: { amount: number; periodicity: number };
};

export type expenseDto = {
    id: number;
    amount: number;
    details: string;
    date: Date;
    category: number;
};
export type createExpenseDto = {
    amount: number;
    details: string;
    date: Date;
    category: number;
};
export type updateExpenseDto = {
    id: number;
    data: { amount: number; details: string; date: Date; category: number };
};

export type fixedExpenseDto = {
    id: number;
    amount: number;
    details: string;
    periodicity: number;
    category: number;
};
export type createFixedExpenseDto = {
    amount: number;
    details: string;
    periodicity: number;
    category: number;
};
export type updateFixedExpenseDto = {
    id: number;
    data: { amount: number; details: string; periodicity: number; category: number };
};

export type expenseCategoryDto = {
    id: number;
    category: string;
};
export type createExpenseCategoryDto = {
    category: string;
};
export type updateExpenseCategoryDto = {
    id: number;
    data: { category: string };
};

export type savingGoalDto = {
    id: number;
    goal: number;
    details: string;
    periodicity?: number;
    fixedContribution?: number;
    goalContributions: goalContributionDto[];
};
export type createSavingGoalDto = {
    goal: number;
    details: string;
    periodicity?: number;
    fixedContribution?: number;
};
export type updateSavingGoalDto = {
    id: number;
    data: { goal: number; details: string; periodicity?: number; fixedContribution?: number };
};

export type goalContributionDto = {
    id: number;
    amount: number;
    date: Date;
    savingGoalId: number;
};
export type createGoalContributionDto = {
    amount: number;
    date: Date;
    savingGoalId: number;
};
export type updateGoalContributionDto = {
    id: number;
    data: { amount: number; date: Date; savingGoalId: number };
};

const baseQuery = fetchBaseQuery({
    baseUrl: "http://127.0.0.1:8000/",
    prepareHeaders: (headers, { getState }) => {
        headers.set("Content-Type", "application/json");
        const token = getState().user.tokens?.access;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }

        return headers;
    },
});

const BaseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        const refreshToken = api.getState().user.tokens?.refresh;
        //try to get new token
        const refreshResult = await baseQuery(
            { url: "/token/refresh/", method: "POST", body: { refresh: refreshToken } },
            api,
            extraOptions
        );
        if (refreshResult.data) {
            // store new token
            api.dispatch(refreshUserToken(refreshResult.data));
            result = await baseQuery(args, api, extraOptions);
        } else {
            api.dispatch(logOut());
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: BaseQueryWithReauth,
    tagTypes: ["Income", "FixedIncome", "ExpenseCategory", "SavingGoal"],
    endpoints: (builder) => ({
        //User endpoints
        getUser: builder.mutation({
            query: (userData: { email: string; password: string }) => ({
                url: "token/",
                method: "Post",
                body: userData,
            }),
        }),
        getUserRefreshToken: builder.mutation({
            query: (refreshToken: string) => ({
                url: "token/",
                method: "Post",
                body: refreshToken,
            }),
        }),

        //Income endpoints
        getUserIncomes: builder.query<incomeDto[], void>({
            query: () => "incomes",
            providesTags: ["Income"],
        }),
        createIncome: builder.mutation({
            query: (incomeData: createIncomeDto) => ({
                url: "incomes/",
                method: "POST",
                body: incomeData,
            }),
            invalidatesTags: ["Income"],
        }),
        updateIncome: builder.mutation({
            query: (incomeData: updateIncomeDto) => ({
                url: `incomes/${incomeData.id}`,
                method: "PUT",
                body: incomeData.data,
            }),
            invalidatesTags: ["Income"],
        }),
        deleteIncome: builder.mutation({
            query: (Id: number) => ({
                url: `incomes/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Income"],
        }),

        //Fixed Income endpoints
        getUserFixedIncomes: builder.query<fixedIncomeDto[], void>({
            query: () => `fixedincomes`,
            providesTags: ["FixedIncome"],
        }),
        createFixedIncome: builder.mutation({
            query: (fixedIncomeData: createFixedIncomeDto) => ({
                url: "fixedincomes/",
                method: "POST",
                body: fixedIncomeData,
            }),
            invalidatesTags: ["FixedIncome"],
        }),
        updateFixedIncome: builder.mutation({
            query: (fixedIncomeData: updateFixedIncomeDto) => ({
                url: `fixedincomes/${fixedIncomeData.id}`,
                method: "PUT",
                body: fixedIncomeData.data,
            }),
            invalidatesTags: ["FixedIncome"],
        }),
        deleteFixedIncome: builder.mutation({
            query: (Id: number) => ({
                url: `fixedincomes/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["FixedIncome"],
        }),

        //Expense Category endpoints
        getUserExpenseCategories: builder.query<expenseCategoryDto[], void>({
            query: () => `expensecategories/`,
            providesTags: ["ExpenseCategory"],
        }),
        createExpenseCategory: builder.mutation({
            query: (expenseCategoryData: createExpenseCategoryDto) => ({
                url: "expensecategories/",
                method: "POST",
                body: expenseCategoryData,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        updateExpenseCategory: builder.mutation({
            query: (expenseCategoryData: updateExpenseCategoryDto) => ({
                url: `expensecategories/${expenseCategoryData.id}`,
                method: "PUT",
                body: expenseCategoryData.data,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        deleteExpenseCategory: builder.mutation({
            query: (Id: number) => ({
                url: `expensecategories/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),

        //Budget Plan endpoints
        getUserBudgetPlans: builder.query<budgetPlanDto[], void>({
            query: () => `budgetplans/`,
            providesTags: ["ExpenseCategory"],
        }),
        createBudgetPlan: builder.mutation({
            query: (budgetPlanData: createBudgetPlanDto) => ({
                url: "budgetplans/",
                method: "POST",
                body: budgetPlanData,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        updateBudgetPlan: builder.mutation({
            query: (budgetPlanData: updateBudgetPlanDto) => ({
                url: `budgetplans/${budgetPlanData.id}`,
                method: "PUT",
                body: budgetPlanData.data,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        deleteBudgetPlan: builder.mutation({
            query: (Id: number) => ({
                url: `budgetplans/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),

        //Expense endpoints
        getUserExpenses: builder.query<expenseDto[], void>({
            query: () => `expenses/`,
            providesTags: ["ExpenseCategory"],
        }),
        createExpense: builder.mutation({
            query: (expenseData: createExpenseDto) => ({
                url: "expenses/",
                method: "POST",
                body: expenseData,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        updateExpense: builder.mutation({
            query: (expenseData: updateExpenseDto) => ({
                url: `expenses/${expenseData.id}`,
                method: "PUT",
                body: expenseData.data,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        deleteExpense: builder.mutation({
            query: (Id: number) => ({
                url: `expenses/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),

        //Fixed Expense endpoints
        getUserFixedExpenses: builder.query<fixedExpenseDto[], void>({
            query: () => `fixedexpenses/`,
            providesTags: ["ExpenseCategory"],
        }),
        createFixedExpense: builder.mutation({
            query: (fixedExpenseData: createFixedExpenseDto) => ({
                url: "fixedexpenses/",
                method: "POST",
                body: fixedExpenseData,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        updateFixedExpense: builder.mutation({
            query: (fixedExpenseData: updateFixedExpenseDto) => ({
                url: `fixedexpenses/${fixedExpenseData.id}`,
                method: "PUT",
                body: fixedExpenseData.data,
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),
        deleteFixedExpense: builder.mutation({
            query: (Id: number) => ({
                url: `fixedexpenses/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["ExpenseCategory"],
        }),

        //Saving Goal endpoints
        getSavingGoalsByUserId: builder.query<savingGoalDto[], number>({
            query: (userId) => `savinggoal/user/${userId}`,
            providesTags: ["SavingGoal"],
        }),
        createSavingGoal: builder.mutation({
            query: (savingGoalData: createSavingGoalDto) => ({
                url: "savinggoal",
                method: "POST",
                body: savingGoalData,
            }),
            invalidatesTags: ["SavingGoal"],
        }),
        updateSavingGoal: builder.mutation({
            query: (savingGoalData: updateSavingGoalDto) => ({
                url: `savinggoal/${savingGoalData.id}`,
                method: "PUT",
                body: savingGoalData.data,
            }),
            invalidatesTags: ["SavingGoal"],
        }),
        deleteSavingGoal: builder.mutation({
            query: (Id: number) => ({
                url: `savinggoal/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SavingGoal"],
        }),

        //Goal Contribution endpoints
        createGoalContribution: builder.mutation({
            query: (goalContributionData: createGoalContributionDto) => ({
                url: "goalContribution",
                method: "POST",
                body: goalContributionData,
            }),
            invalidatesTags: ["SavingGoal"],
        }),
        updateGoalContribution: builder.mutation({
            query: (goalContributionData: updateGoalContributionDto) => ({
                url: `goalContribution/${goalContributionData.id}`,
                method: "PUT",
                body: goalContributionData.data,
            }),
            invalidatesTags: ["SavingGoal"],
        }),
        deleteGoalContribution: builder.mutation({
            query: (Id: number) => ({
                url: `goalContribution/${Id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SavingGoal"],
        }),
    }),
});

export const {
    useGetUserMutation,

    useGetUserIncomesQuery,
    useCreateIncomeMutation,
    useUpdateIncomeMutation,
    useDeleteIncomeMutation,

    useGetUserFixedIncomesQuery,
    useCreateFixedIncomeMutation,
    useUpdateFixedIncomeMutation,
    useDeleteFixedIncomeMutation,

    useGetUserExpenseCategoriesQuery,
    useCreateExpenseCategoryMutation,
    useDeleteExpenseCategoryMutation,
    useUpdateExpenseCategoryMutation,

    useGetUserBudgetPlansQuery,
    useCreateBudgetPlanMutation,
    useDeleteBudgetPlanMutation,
    useUpdateBudgetPlanMutation,

    useGetUserExpensesQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
    useDeleteExpenseMutation,

    useGetUserFixedExpensesQuery,
    useCreateFixedExpenseMutation,
    useUpdateFixedExpenseMutation,
    useDeleteFixedExpenseMutation,

    useGetSavingGoalsByUserIdQuery,
    useCreateSavingGoalMutation,
    useUpdateSavingGoalMutation,
    useDeleteSavingGoalMutation,

    useCreateGoalContributionMutation,
    useUpdateGoalContributionMutation,
    useDeleteGoalContributionMutation,
} = apiSlice;
