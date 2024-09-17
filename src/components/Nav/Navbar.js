import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <div className="navigation-bar">
        <h1>
          Contact App
        </h1>
        <ul className="nav-bar-list">
          <li className="nav-bar-list-item">
            <Link to="/">Add Contact</Link>
          </li>
          <li className="nav-bar-list-item">
            <Link to="/Contact">Contact List</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar