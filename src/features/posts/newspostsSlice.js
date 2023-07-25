import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { client } from "../../api/client";

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localCompare(a.date)
})

const initialState = postsAdapter.getInitialState({
  status: 'idle',
  error: null
})
export const fetchNews = createAsyncThunk(
  'news/fetchNews', async () => {
    const response = await client.get('/fakeApi/posts/news')
    return response.data
  }
)
export const addNewPost = createAsyncThunk(
  async (post) => {
    const response = await client.post('/fakeApi/posts', post)
    return response.data
  }
)
const newsPostsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    
  },
  extraReducers(builder){
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = 'succeeded'
        postsAdapter.upsertMany(state, action.payload)
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(addNewPost.fulfilled, postsAdapter.addOne)
  }
})
// export the reducer
export  default newsPostsSlice.reducer

// export reducer actions
export const {
  selectAll: getAllNews, 
  selectById: getNewsById, 
  selectIds: getNewsIds,
} = postsAdapter.getSelectors(state => state.news)

export const selectPostsByUser = createSelector(
  [getAllNews, (state, userId) => userId],
  (news, userId) => news.filter(post => post.userId === userId)
)
