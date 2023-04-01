import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tileOrStripeView: true,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        switchTileOrStripeView: state => {
            state.tileOrStripeView = !state.tileOrStripeView;
        },
    },
});

export const { switchTileOrStripeView } = headerSlice.actions;

export const selectTileOrStripeView = state => state.header.tileOrStripeView;

export default headerSlice.reducer;
