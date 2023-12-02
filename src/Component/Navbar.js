import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    {document.body.style.backgroundColor="rgba(25,25,25)"};
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand font-size" to="#">Admin DashBoard</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
      <span className="navbar-text">
        {/* Search Duplicate | Try Notion */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item text-white">
          <Link className="nav-link active" aria-current="page" to="#">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Duplicate</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">|</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Try Notion</Link>
        </li>
      </ul>
      </span>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar