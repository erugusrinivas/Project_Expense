import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: '',
        snackBarContent: '',
        showLoaderContent: ''
    },
    reducers: {
        saveUserDetails: (state, action) => {
            state.userDetails = action.payload;
            alert(action.payload);
        },

        showSnackbar: (state, action) => {
            state.snackBarContent = action.payload;
        },
        showLoader: (state, action) => {
            state.showLoaderContent = action.payload;
        }
    },

})
export const { saveUserDetails, showSnackbar, showLoader } = userSlice.actions
export default userSlice.reducer