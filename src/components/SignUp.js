// import './Signin.css';
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { CircleUserRound } from 'lucide-react';
// import { Eye } from 'lucide-react';
import { Eye, EyeOff } from 'lucide-react';
import { NAVIGATION_ROUTES } from './appConstants';
const Login = () => {
    const [userId, setUserId] = useState(95);
    const [name, setName] = useState()
    const [Password, setPassword] = useState()
    const [ConfirmPassword, setConfirmPassword] = useState()
    const [Email, setEmail] = useState()
    const [MobileNumber, setMobileNumber] = useState()
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,Password,ConfirmPassword,Email,MobileNumber);
        if (!/^[a-zA-Z0-9_]+$/.test(name)) {
            alert("Username can only contain alphanumeric characters and underscores.");
            
            return;
        }
        if (Password !== ConfirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(Email)) {
            alert("invalid email format.");
            return;
        }
        // const emailReg = new RegExp("^[a-zA-Z0-9]+([._+-][0-9a-zA-Z]+)*@[0-9A-Za-z]+[.][a-zA-Z]{2,4}[.][a-zA-Z]{2,4}$")
        // if(emailReg.test(Email)){
        //     alert("valid Email")
        //     return;
        // }
        // else{
        //     alert("invalid email format")
        // }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if (!passwordRegex.test(Password)) {
            alert("Invalid password format.");
            return;
        } 
       if(/^[6-9][0-9]{9}$/gm.test(MobileNumber) === false){
        alert('Please enter a valid mobile number')
        return
        }
        // Send a POST request to the server with the form data
        axios.post('http://localhost:3050/SignUp', { Email, Password, ConfirmPassword, MobileNumber, name })
            .then(res => {
                if (res.data === "Already Existing User") {
                    alert("YOUR ALREADY EXISTING USER PLEASE LOGIN!");
                    navigate(`${NAVIGATION_ROUTES.USER_LOGIN}/${userId}`)
                }
                else {
                    alert("your SuccessFuly  registered Welcome TO HOME ")
                    navigate('/AdminHome')
                }
                console.log(res)
            })
            .catch(err => console.log(err));
    }
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return (
        <div class="Container1">
             <nav id="Nav">
          <ul>
            <li id="Expense"><Link to="/SignUp">Expense Tracker</Link></li>
          </ul>
          </nav>
            <h1 id="SignUp">Sign Up for Expense Tracker <CircleUserRound /></h1>
            {/* <title>Sign Up</title> */}
           {/* <p id="tag"> it's quick and easy.</p> */}
            <form onSubmit={handleSubmit}id="form">

                { <label for="UserName">Full Name</label> }
                <input type="text" id="username" name="email" size="30px" placeholder="John Doe"autoComplete="off" onChange={(e) => setName(e.target.value)}></input>

                {/* <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder=''required onChange={(e) => setPassword(e.target.value)}></input> */}
                <label for="confirmPassword">Password</label>
                <input  type={passwordVisible ? 'text' : 'password'} id="confirmPassword" placeholder="Enter Your Password"name="email"required autoComplete="off" onChange={(e) => setConfirmPassword(e.target.value)}></input>
                <p className='eye'onPointerMove={togglePasswordVisibility}>
                    {passwordVisible ? <EyeOff /> : <Eye />}</p>
                    <label for="password">Confirm Password</label>
                    { <input type="password" id="password" name="password" placeholder='Enter Your Password'required onChange={(e) => setPassword(e.target.value)}></input> }
                <div id="message" class="message"></div>
                <label for="Email">Email Address</label>
                <input type="email" id="email" name="email" size="30" placeholder="youremail@example.com"autoComplete="off" onChange={(e) => setEmail(e.target.value)}></input>

                <label for="Mobile Number">MobileNumber</label>
                <input type="number" id="mobileNumber"placeholder='Mobile Number' name="email" size="30" onChange={(e) => setMobileNumber(e.target.value)}></input>
                <input type="checkbox" id="box" name="check" ></input>  
                <label for="check" id="Findme">I agree to the Terms of  Service & Privacy Policy</label>
                <button id="Button">Sign Up</button>
            </form>
            <Link to={`${NAVIGATION_ROUTES.USER_LOGIN}/${userId}`}><button id="Link">Login</button></Link>
           

        </div>
    )
}
export default Login;




