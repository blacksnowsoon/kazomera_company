import { createSlice, createAsyncThunk, createEntityAdapter, createSelector  } from '@reduxjs/toolkit';
import { client } from 'api/client';

const investmentAdapter = createEntityAdapter();
const initialState = investmentAdapter.getInitialState();


export const fetchInvestments = createAsyncThunk(
  'investments/fetchInvestments', async () => {
    const response = await client.get('/fakeApi/investments')
    return response.data
  }
)
export const addInvestment = createAsyncThunk(
  async (investment) => {
    const response = await client.post('/fakeApi/investments', investment)
    return response.data
  }
)
const investmentsSlice = createSlice({
  name: 'investments',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchInvestments.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchInvestments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        investmentAdapter.setAll(state, action.payload)
      })
      .addCase(fetchInvestments.rejected, (state, action) => {
        state.status = 'failed'
      })
      .addCase(addInvestment.fulfilled, investmentAdapter.addOne)
  }
})
export default investmentsSlice.reducer

export const {
  selectAll: getAllInvestments,
  selectById: getInvestmentById,
  selectIds: getInvestmentIds,
} = investmentAdapter.getSelectors(state => state.investments)
export const selectInvestmentsByUser = createSelector(
  [getAllInvestments, (state, userId) => userId],
  (investments, userId) => investments.filter(investment => investment.userId === userId)
)