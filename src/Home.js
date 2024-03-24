// export const Home=()=>{
//     return(
//     <section className="Home" id="#Home">
//     <div className="hero-container">
//         <div className="info-side">
//             <h3 class="part-1">Hello, This is</h3>
//             <h1>Srinivas Erugu</h1>
//             <h3>And I'm a <span id="changing-text">UI Devoloper</span></h3>
//             <div className="p-txt">
//             <p> Front-End Developer proficient in crafting responsive and visually appealing user interfaces. Adept at leveraging Java technology  frameworks to create dynamic, efficient, and user-centric app's.<br></br></p>
//           </div> 
          
//             <a href="#"><i class="uil uil-facebook-f"></i></a>
//             <a href="mailto:srinivaserugu987@gmail.com"><i class="uil uil-envelope" ></i></a>
//             <a href="https://www.instagram.com/erugu_srinivas/"><i class="uil uil-instagram"></i></a>
//             <a href="https://www.linkedin.com/in/erugu-srinivas-02ab9a224/"><i class="uil uil-linkedin-alt"></i></a>
//             <br></br>
//             <div className="btn">
//               <a href="Srinivasuluresume.pdf" target="blank"><button>Download CV</button></a>
//             </div>
//             <div className="hero-img">
//                 <img src="download.png" alt="My pic"></img>
//             </div>
//         </div>
//     </div>
//     </section>
//     )
// }

// import {Link, useNavigate} from "react-router-dom";
// import React, { useEffect } from "react";
// import React, { useEffect, useState} from 'react';
// import { CircleUserRound } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// const Home=()=>{
//   const navigate = useNavigate();
//   const navigateToLogin = ()=>{
//     navigate("/Login");
//   };
//   return(
//     <div>
      
//     <h1>This is Home Page</h1>
//     <p> click here to <Link to="/Login">login</Link></p>
//     <button onClick={(e)=>navigateToLogin()}>Login/signup</button>
//     <Link to="/Update">Update</Link>
//     </div>
   
//   )
// }
// export default Home;

import { CircleUserRound} from 'lucide-react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faUserPlus} from "@fortawesome/react-fontawesome";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Home() {
  const handleClick=()=>{
    Swal.fire("Are YOU Sure TO LOGIN");

}
  const [userData, setUserData] = useState("");
  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };

//   useEffect(() => {
//     fetch("http://localhost:3050/userData", {
//       method: "POST",
//       crossDomain: true,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         token: window.localStorage.getItem("token"),
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//             setUserData(data.data);
//       });
//   }, []);


//   return (
//     <div className="auth-wrapper">
//       <div className="auth-inner">
//         <FontAwesomeIcon icon={faUserPlus} onClick={() => navigate("/Update",{state: userData})}/>
//         <div>
//           Name<h1>{userData.name}</h1>
//           Email <h1>{userData.Email}</h1>
//           <br />
//           <button onClick={logOut} className="btn btn-primary">
//             Log Out
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const navigate = useNavigate()
//   const[userData,setUserData] = useState("");
//   const logOut = () =>{
//     window.localStorage.clear();
//     window.location.href = './Login'
//   };

  useEffect (() =>{
    fetch("http://localhost:3050/userData",{
        method : "POST",
        crossDomain : true,
        headers:{
            "Content-type": "application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
         body:JSON.stringify({
            token : window.localStorage.getItem('token'),
         }),
        })
        .then((res) => res.json())
        .then((data) => {
           console.log(data);
            setUserData(data.data);
            
        });

},[]);

  return(
    <div>
      <h2>WELCOME TO OUR BLOG...</h2>
      <marquee> WELCOME TO HOME USER.....!<CircleUserRound onClick={()=>navigate("./Update",{state:userData})}></CircleUserRound></marquee>
      {/* Name<h1>{userData.name}</h1>
      Password<h1>{userData.Password}</h1>

      Email<h1>{userData.Email}</h1> */}
{/* <b id="home"><Google></Google>SignOut</b> */}
   <button onClick = {handleClick}>LOGIN</button>
   <button1 onClick = {logOut}>LOGIN</button1>
 
     </div>
  )
}