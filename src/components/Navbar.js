
import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">{props.Logo}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"/>
              <label className={`custom-control-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="customSwitch1" >Enable Dark mode</label>
            </div>
      </div>
    </nav>
        </>
  )
}

export default Navbar
