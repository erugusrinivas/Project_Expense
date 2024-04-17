

import { CircleUserRound } from 'lucide-react';
import React, { useEffect, userId, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useParams } from 'react-router-dom';
import { NAVIGATION_ROUTES } from './appConstants';
import Loader from "../Loader/Loader";

export default function Home() {

  const params = useParams();
  console.log(params);
  const [userId, setUserId] = useState(95)
  const handleClick = () => {

    Swal.fire("Are YOU Sure TO LOGIN");


  }
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./Login";
  };
  useEffect(() => {

    fetch("http://localhost:3050/userData", {

      method: "POST",
      crossDomain: true,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data.data);

      });

  }, []);

  return (
    <div>
      
      <h2>WELCOME TO OUR BLOG...</h2>
     
      <marquee> WELCOME TO HOME USER.....!<CircleUserRound onClick={() => navigate("./Update", { state: userData })}></CircleUserRound></marquee>
      {/* Name<h1>{userData.name}</h1>
      Password<h1>{userData.Password}</h1>

      Email<h1>{userData.Email}</h1> */}
      {/* <b id="home"><Google></Google>SignOut</b> */}
      {/* <button onClick = {handleClick}>LOGOUT</button> */}
      <Link to={`${NAVIGATION_ROUTES.USER_LOGIN}/${userId}`}> <Loader/><button id="BT_N">LOGIN</button></Link>

    </div>
  )
}