import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { showSnackbar } from "../slices/userSlice";


const CustomSnackbar = () => {
    const dispatch=useDispatch();
    const snackBarContent = useSelector(state => state.user.snackBarContent);
    const handleClose = ()=>{
        dispatch(showSnackbar({}))
    }
    return(
        <Snackbar
        open={snackBarContent.visible}
        autoHideDuration = {4000}
        onClose={handleClose}
        message={snackBarContent.message}
    />
    );

}
export default CustomSnackbar