import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    data: {},
    error: null,
}

export const login = createAsyncThunk("login", async (data) => {
    const res = await axios.post("http://127.0.0.1:8000/login", data);
    return res.data;

})

const loginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: function(builder) {
        builder.addCase(login.pending, function(state) {
            state.isLoading = true;
            state.error = null;
        })
        builder.addCase(login.fulfilled, function(state, action) {
            state.isLoading = false;
            state.user = action.payload;
        })
        builder.addCase(login.rejected, function(state, action) {
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
})



export default loginSlice.reducer;