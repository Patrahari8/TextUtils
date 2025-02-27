import React, {useState} from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.changeBgs==="#cfe2ff"?"bg-info":(props.changeBgs==="#f1aeb5")?"bg-danger":(props.changeBgs==="#a3cfbb")?"bg-success":props.mode==="light"?"bg-light":"bg-dark"}`}>
    {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.changeBgs==="#cfe2ff"?"bg-info":(props.changeBgs==="#f1aeb5")?"bg-danger":(props.changeBgs==="#a3cfbb")?"bg-success"}`}> */}
    {/* // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}> */}
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home</a>

        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutText}About</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form> */}
      <div style={{width:"20px", height:"20px", borderRadius:"50%", cursor:"pointer", backgroundColor:"#cfe2ff", marginRight:"10px", marginBottom:"2px"}} onClick={() => props.changeBg('#cfe2ff')}></div>
      <div style={{width:"20px", height:"20px", borderRadius:"50%", cursor:"pointer", backgroundColor:"#f1aeb5", marginRight:"10px", marginBottom:"2px"}} onClick={() => props.changeBg('#f1aeb5')}></div>
      <div style={{width:"20px", height:"20px", borderRadius:"50%", cursor:"pointer", backgroundColor:"#a3cfbb", marginRight:"10px", marginBottom:"2px"}}  onClick={() => props.changeBg('#a3cfbb')}></div>
      <div className={`form-check form-switch text-${props.mode === "dark"?"light":"dark"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: 'droo',
//     aboutText: 'About'

// }