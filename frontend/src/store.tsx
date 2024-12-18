import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice.ts";
import detailsModalReducer from "../src/reducers/detailsModalReducers";
import createModalReducer from "../src/reducers/createModalReducers";
import userReducer from "./reducers/userReducers.tsx";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        detailsModal: detailsModalReducer,
        createModal: createModalReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
