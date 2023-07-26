import { configureStore } from "@reduxjs/toolkit";

import newsPostsSlice from "features/posts/newspostsSlice";
import investmentpostsSlice from "features/posts/investmentpostsSlice";
import projectpostsSlice from "features/posts/projectpostsSlice";
import userSlice from "features/users/userSlice";

import { apiSlice } from "features/rtkAPI/apiSlice";


export const store = configureStore({
    reducer: {
        news: newsPostsSlice,
        investments: investmentpostsSlice,
        projects: projectpostsSlice,
        users: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    //merge the default middlewares with the api-slice middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})
