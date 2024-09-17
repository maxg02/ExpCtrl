import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type modalState = {
    show: { income: boolean; fixedIncome: boolean };
};

export const initialState: modalState = {
    show: { income: false, fixedIncome: false },
};

export const createModalSlice = createSlice({
    name: "createModal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.show = action.payload;
        },
        hideModal: (state) => {
            state.show = initialState.show;
        },
    },
});

export const { showModal, hideModal } = createModalSlice.actions;

export default createModalSlice.reducer;