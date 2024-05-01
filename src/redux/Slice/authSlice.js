import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Auth_Token, Base_Url } from "../../Global/Const";

const initialState = {
    Login: null,
    LoginFailed: null,
    loading: false
};



export const Login_Admin = createAsyncThunk(
    "login/Login_Admin",
    async (data, { rejectWithValue }) => {
        try {
            const config = {
                method: "POST",
                url: Base_Url + "dashboard/login/",
                headers: {
                    Authorization: `Bearer ${Auth_Token()}`,
                    // 'Content-Type': 'application/json',
                },
                data
            };

            const result = await axios(config);
            return result.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.response.data);
        }
    }
);




const authenticationSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        resetLoginState: (state) => {
            state.Login = null
            state.LoginFailed = null
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(Login_Admin.rejected, (state, action) => {
                state.loading = false;
                state.LoginFailed = action.payload;
            })

            .addCase(Login_Admin.pending, (state) => {
                state.loading = true;
            })

            .addCase(Login_Admin.fulfilled, (state, action) => {
                state.loading = false;
                state.Login = action.payload;
            });
    },
});

export default authenticationSlice.reducer;
export const { resetLoginState } = authenticationSlice.actions

