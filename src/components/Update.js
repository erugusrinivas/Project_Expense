
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Update() {
  const [Email, setEmail] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    fetch("http://localhost:3050/getUsers")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        return response.json();
      })
      .then(data => {
        // Assuming data is an array of objects with email and password properties
        if(data && data.length > 10) {
          const userData = data[10]; // Assuming you want the first user's data
          setEmail(userData.Email);
          setConfirmPassword(userData.ConfirmPassword);
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Email, ConfirmPassword);

    // Add your form submission logic here
  }

  return (
    <div className="container9">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <nav id="bar1">
            <ul>
              <h2 id="H2">Expense Tracker</h2>
              <li><Link to="/Dashboard">Dashboard</Link></li>
              <li><Link to="/Transactions">Transactions</Link></li>
              <li><Link to="/Reports">Reports</Link></li>
              <li><Link to="/Reports">Budgets</Link></li>
              <li><Link to="/Goals">Goals</Link></li>
              <li><Link to="/Reports">Learn</Link></li>
            </ul>
          </nav>

          <div className="profile">
            <form onSubmit={handleSubmit}>
              <h1 id="BAR2">Settings</h1>
              <div className="profile1">
                <h4 id="BAR2"> Profile</h4>
                <label>Email</label>
                <input
                  placeholder="Email"
                  className="form-control"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="button" id="change">Change</button>
                <label>Password</label>
                <input
                  placeholder="password"
                  className="form-control"
                  value={ConfirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button type="button" id="change">Change</button>
                <h4 id="BAR4">Preferences</h4>
                <div className="profile2">
                  <p id="Bar3">Transaction Notifications</p>
                  <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="profile3">
                  <p id="Bar3">Weekly Summary</p>
                  <label className="switch1">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="profile4">
                  <p id="Bar3">Product Updates</p>
                  <label className="switch2">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="save1">
                  <button type="submit" id="Save">Save changes</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;
