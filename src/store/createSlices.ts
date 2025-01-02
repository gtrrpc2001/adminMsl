import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: [],
    reducers: {
        test: (_state, action: PayloadAction<any>) => (_state = action.payload),
    },
});
export const testActions = testSlice.actions;