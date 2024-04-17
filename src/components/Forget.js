import './Login.css';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
// import{Link} from "react-router-dom";
import axios from 'axios'
import { CiHotdog } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NAVIGATION_ROUTES } from './appConstants';

const Forget=()=>{
  const params=useParams();
  console.log(params);
  const [userId,setUserId]=useState(95)
  const[Email,setEmail]=useState()
  const navigate = useNavigate()
 

axios.defaults.withCredentials=true;
const handleSubmit=(e)=>{
 
  
  e.preventDefault()
  axios.post('http://localhost:3050/Forget',{Email})
 
  
  .then(res  => {
    if(res.data.Status==="Success"){
    
      navigate(`${NAVIGATION_ROUTES.USER_LOGIN}/${userId}`)
    }
})
  .catch(err=>console.log(err))
  
}
return(
    <div class="container">
       <nav id="Naviii">
          <ul>
      
            <li id="Expen"><Link to="/SignUp"> <CiHotdog /><b>Expense Tracker</b></Link></li>
            

          </ul>
          </nav>
      <h1 class="forget">Forget Password</h1>
      <div class="forgetPassword">
    <form onSubmit={handleSubmit}>
    <label for="Email">Email:</label>
    <input type="email" id="email" name="email"size="30"autoComplete="off" onChange={(e)=>setEmail(e.target.value)}></input>
    <button type="submit" id="SignIN">Send</button>
    </form>
   {/* <Link to="/SignUp" ><button>Sign Up</button></Link> */}
   </div>
    </div>
)}
export default Forget;