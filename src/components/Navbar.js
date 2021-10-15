import React from "react";
import logo from '../assets/Logo-KH.svg';
import './style.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid"> 
        <a className="navbar-brand d-flex" href="/">
            <img id="logo" className="img-fluid" src={logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 float-start bg-light">
            <li className="nav-item">
              <a className="nav-link" href="/">Cari Project</a>
            </li>
                    
            <li className="nav-item">
              <a className="nav-link " href="/">Daftar Talent</a>
            </li>
                    
            <li className="nav-item">
              <a className="nav-link" href="/">Marketplace</a>
            </li>
                    
            <li className="nav-item">
              <a className="nav-link" href="/">Kreatifacademy</a>
            </li>

            <li className="nav-item">
              <select className="form-select bg-light">
                <option>ID</option>
                <option>EN</option>
              </select>
            </li>
            
            <li className="nav-item">
              <a id="btn-masuk" className="btn btn-outline-warning" href="/">MASUK</a>
              <a id="btn-daftar" className="btn btn-md" href="/">DAFTAR</a>
            </li>

          </ul>
        </div>      
      </div>
    </nav>
  )
}