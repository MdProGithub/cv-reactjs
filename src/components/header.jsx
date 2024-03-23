import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';

import Home from '../pages/home';
import Blog from '../pages/blog';
import Achievement from '../pages/achievement';
import Contact from '../pages/contact';
import LegalNotice from '../pages/legalNotice';
import Service from '../pages/service';

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark header-bg">
        <div className="container-fluid">
          <img src="../../public/images/logo.png" alt="" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home"><span>Accueil</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service"><span>Service</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/achievement"><span>Réalisations</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog"><span>Blog</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact"><span>Contact</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/legalNotice"><span>Mentions Légales</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legalNotice" element={<LegalNotice />} />
      </Routes>
    </div>
  );
}

export default Header;
