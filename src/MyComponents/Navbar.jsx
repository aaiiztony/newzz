import React, { Component } from "react";
import dropdown from './dropdown.png';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-black">
          <div className="container-fluid">
            <Link className="navbar-brand text-white" to="/">
              <strong><b>Newzz</b></strong>
            </Link>
            <div className="collapse navbar-collapse text-white justify-content-between" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item"><Link className="nav-link text-white" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/technology">Technology</Link></li>
              </ul>
              <form className="d-flex" role="search" id= "search">
            <input className="form-control me-2" type="search" id="inp-search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success text-white border-white" type="submit">Search</button>
            </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
             <img src={dropdown} alt="dropdown-png" style={{width:"2.5rem"}}/>
            </button>
          </div>
        </nav>
      </div>
    );
  }
}
