import { createSlice, createAsyncThunk, createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import {client } from "api/client";


const projectsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localCompare(a.date)
})
const initialState = projectsAdapter.getInitialState({
  status: 'idle',
  error: null
})
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects', async () => {
    const response = await client.get('/fakeApi/projects')
    return response.data
  }
)
export const addNewProject = createAsyncThunk(
  async (project) => {
    const response = await client.post('/fakeApi/projects', project)
    return response.data
  }
)
const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    
  },
  extraReducers(builder){
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        projectsAdapter.upsertMany(state, action.payload)
        state.status = 'succeeded'
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(addNewProject.fulfilled, projectsAdapter.addOne)
  }
})
export default projectsSlice.reducer

export const {
  selectAll: getAllProjects,
  selectById: getProjectById,
  selectIds: getProjectIds,
} = projectsAdapter.getSelectors(state => state.projects)

export const selectProjectsByUser = createSelector(
  [getAllProjects, (state, userId) => userId],
  (projects, userId) => projects.filter(project => project.userId === userId)
)