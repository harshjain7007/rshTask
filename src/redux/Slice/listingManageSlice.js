import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_Url, Auth_Token } from "../../Global/Const";




const initialState = {
    dashBoardData: null,
    dashBoardDataFailed: null,

    loading: false,
};



export const Dashboard_Data = createAsyncThunk(
    "dashboard/Dashboard_Data",
    async (data, { rejectWithValue }) => {
        // const { params } =  data.params
        try {
            const config = {
                method: "GET",
                url: Base_Url + `dashboard/dashboard-statics`,
                headers: {
                    Authorization: `Token ${Auth_Token()}`
                    // 'Content-Type': 'application/json',
                },
                // data
            };
            const results = await axios(config);
            return results.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);




const listingSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        resetDashboard: (state) => {
            state.dashBoardData = null
            state.dashBoardDataFailed = null
            state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder
        
        .addCase(Dashboard_Data.rejected, (state, action) => {
            state.loading = false;
            state.dashBoardDataFailed = action.payload;
        })
        .addCase(Dashboard_Data.pending, (state) => {
            state.loading = true;
        })
        .addCase(Dashboard_Data.fulfilled, (state, action) => {
            state.loading = false;
            state.dashBoardData = action.payload;
            state.dashBoardDataFailed = null;
        })
    },
});

export default listingSlice.reducer;
export const { resetAddList } = listingSlice.actions