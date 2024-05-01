import { createReducer } from "@reduxjs/toolkit";

export const searchText = createReducer({
    searchTxt: ""
}, {
    txt:(state, action) => {
        state.searchTxt = action.payload
    },
    clearSearchText: (state, action) => {
        state.searchTxt = "";
    }
})


export const BarIcon = createReducer({
    burger: false,
    mobileBurger: true
}, {
    barIcon:(state, action) => {
        state.burger = action.payload
    },
    mobileIcon:(state, action) => {
        state.mobileBurger = action.payload
    },
})

