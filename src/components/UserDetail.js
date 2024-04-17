

import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
function UpdateUser() {
  const location = useLocation();
  const [userData, setUserData] = useState({});
  // const [message, setMessage] = useState('');
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    console.log(location);
    setEmail(location.state.Email);
    setPassword(location.state.Password);

  }, [])
  const updateData = () => {
    console.log(Email, Password);
    fetch("http://localhost:3500/UpdateUser", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        id: location.state._id,
        Email: Email,
        Password: Password
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/Home"
      });
  }
  return (
    <div>
      First Name<br />
      <input placeholder="Email" className="form-control"
        defaultValue={Email}
        onChange={(e) => setEmail(e.target.value)} /><br />
      last Name<br />
      <input placeholder="Pasword" className="form-control"
        defaultValue={Password}
        onChange={(e) => setPassword(e.target.value)} /><br />
      Email<br />

      <button onClick={updateData}>Update</button>
    </div>
  );
}

export default UpdateUser;