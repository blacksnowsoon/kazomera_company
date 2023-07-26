import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { client } from "api/client";

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers', async () => {
    const response = await client.get('/fakeApi/users')
    return response.data
  }
)

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, usersAdapter.setAll)
  }
})
export default userSlice.reducer
export const { 
  selectAll: getAllUsers, 
  selectById: getUserById, 
  selectIds: getUserIds 
} = usersAdapter.getSelectors(state => state.users)
