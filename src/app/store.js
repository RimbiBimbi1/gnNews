import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/Header/headerSlice';
import feedReducer from '../components/Feed/feedSlice';

export const store = configureStore({
    reducer: {
        header: headerReducer,
        feed: feedReducer,
    },
});
