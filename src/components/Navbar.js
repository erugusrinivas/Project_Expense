import React from "react";
import {Link} from "react-router-dom";


export default function Navbar() {
    return (     
        <>
      <nav className="navbar">
        <h1 className="logo">Savvy Money</h1>
        <div className="menu">
          <Link to="/" className="menu-link">Dashboard</Link>
          <Link to="/Transactions" className="menu-link">Transactions</Link>
          <Link to="/Budgets" className="menu-link">Budgets</Link>
          <Link to="/Reports" className="menu-link">Reports</Link>
          <Link to="/Settings" className="menu-link">Settings</Link>
          <button aria-label="Help" className="menu-btn">
            <FileQuestionIcon className="menu-icon" />
          </button>
        </div>
      </nav>
      </> 
    )
  }
  
  function FileQuestionIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
        <path d="M12 17h.01" />
      </svg>
    )
  }
  