import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    error: null,
}

export const logout = createAsyncThunk("logout", function() {
    axios.post("http://127.0.0.1:8000/api/logout");
})

const logoutSlice = createSlice({
    name: "logout",
    initialState,
    extraReducers: function(builder) {
        builder.addCase(logout.pending, function(state) {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(logout.fulfilled, function(state) {
            state.isLoading = false;
        });
        builder.addCase(logout.rejected, function(state, action) {
            state.isLoading = false;
            state.error = action.payload
        });
    }
})

export default logoutSlice.reducer;