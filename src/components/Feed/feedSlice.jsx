import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    numberOfNews: 0,
};

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        setNumberOfNews: (state, action) => {
            state.numberOfNews = action.payload;
        },
    },
});

export const { setNumberOfNews } = feedSlice.actions;

export const selectNumberOfNews = state => state.feed.numberOfNews;

export default feedSlice.reducer;
