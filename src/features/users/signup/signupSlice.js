import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isLoggedin: false,
    isLoadding: false,
    error: null,
};


export const signup = createAsyncThunk("signup", async (data) =>  {
    const res = await axios.post("http://127.0.0.1:8000", data);
    return res.data;
})


const signupSlice = createSlice({
    name: "signup",
    initialState,
    extraReducers: function(builder) {
        builder.addCase(signup.pending, function(state) {
            state.isLoadding = true;
            state.error = null;
        });
        builder.addCase(signup.fulfilled, function(state, action) {
            state.isLoadding = false;
            state.isLoggedin = true;
            state.user = action.payload;
        });
        builder.addCase(signup.rejected, function(state, action) {
            state.isLoadding = false;
            state.error = action.error.message
        });
    }
});

export default signupSlice.reducer;