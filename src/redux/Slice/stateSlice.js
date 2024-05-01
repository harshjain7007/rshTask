import { createSlice } from '@reduxjs/toolkit';

const searchTextSlice = createSlice({
    name: 'searchText',
    initialState: {
        searchTxt: '',
    },
    reducers: {
        txt: (state, action) => {
            state.searchTxt = action.payload;
        },
        clearSearchText: (state, action) => {
            state.searchTxt = '';
        },
    },
});

export const { txt, clearSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
