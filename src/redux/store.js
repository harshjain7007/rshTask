import { configureStore } from "@reduxjs/toolkit";
import { searchText, BarIcon } from "./reducer";
import authenticationSlice from "./Slice/authSlice";
import listingManageSlice from "./Slice/listingManageSlice";
import searchTextSlices from "./Slice/stateSlice"



const store = configureStore({
  reducer: {
    txt: searchText,
    searchText: searchTextSlices,
    authentication: authenticationSlice,
    BarIcon: BarIcon,
    Listing: listingManageSlice,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

export default store