import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactTOastify.css'
import '../components/Login.css';
import 'react-toastify/dist/ReactToastify.css';

const Snackbar=()=>{
    const Notify = ()=>{
        toast("USER LOGIN")
    }
    return(
        <div>
            <button className="snackbar" onClick={e => Notify()}>Notify</button>
            <ToastContainer/>
        </div>
    )

}
export default Snackbar
