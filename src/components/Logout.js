
import{Link} from "react-router-dom";
import React from "react";
import { CircleUserRound} from 'lucide-react';

import Google from "./Google";
import Swal from "sweetalert2";
const Logout =()=>{
    const handleClick=()=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, LOGOUT!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    
    }
    return(
        <div>
            <h1>WELCOME Mr...</h1>
        <marquee> WELCOME TO Dashboard Mr.....!<CircleUserRound></CircleUserRound></marquee> 
       
        <button onClick={handleClick}>  <Link to="/SignUp"><Google></Google></Link> </button>
        <h1>WELCOME Mr...</h1>
        </div>
    )
}
export default Logout;