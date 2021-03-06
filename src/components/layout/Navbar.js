import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from '../../images/logo-images/worldofvape.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  const { auth } = props
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <div className="navbar-container">
      <div className="left-column">
        <div className="phone-icon-wrapper">
          <i className="fas fa-phone-volume"><FontAwesomeIcon icon="phone-volume" /></i>
        </div>
        <div className="hours-number-wrapper">
          <div className="call-num">
            <p>Call!</p>
          </div>
          <a href="tel:8014327656" className="phone-num">(801)432-7656</a>
          <p>MON TO SAT: 9AM - 11PM</p>
          <p>SUN:  10AM - 10PM</p>
        </div>
      </div>

    <div className="center-column">
      <div className="logo">
        <Link to="/" className="logo"><img src={Logo} alt="logo"/></Link>
      </div>

      { links }
    </div>


    <div className="right-column">
      <div className="address-wrapper">
        <div className="get-directions">
          <p>Get Directions!</p>
        </div>
        <a href="https://www.google.com/maps/place/4150+Carriage+Square,+Taylorsville,+UT+84129/@40.6804047,-111.941192,18.25z/data=!4m5!3m4!1s0x87528b83501b549f:0x7d01fe3dfeace4aa!8m2!3d40.6808657!4d-111.9410474"
          id="address-link-google">4150 s Carriage Square Taylorsville, Utah, 84129
        </a>
      </div>
      
      <div className="map-icon-wrapper">
        <i className="fas fa-map-marker-alt"><FontAwesomeIcon icon="map-marked-alt" /></i>
      </div>
    </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)