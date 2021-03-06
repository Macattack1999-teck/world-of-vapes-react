import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOutLinks = () => {
  return (
    <div className="links">
      <div className="link">
          <NavLink to="/">Homepage</NavLink>
      </div>

      <div className="link">
        <NavLink to="/devices">Devices</NavLink>
      </div>

      <div className="link">
        <NavLink to="/glass">Glass</NavLink>
      </div>

      <div className="link">
        <NavLink to="/juice">Juice</NavLink>
      </div>
    </div>
  )
}

export default SignedOutLinks