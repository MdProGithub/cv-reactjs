import React from 'react';
import {Routes, Route,Link} from 'react-router-dom';


import Home from '../pages/home';
import Blog from '../pages/blog';
import Achievement from '../pages/achievement';
import Contact from '../pages/contact';
import LegalNotice from '../pages/legalNotice';
import Service from '../pages/service';


function Header() {
  return (
    <div>
      <nav>
        <Link to='/home'>Accueil</Link>
        <Link to='/service'>Service</Link>
        <Link to='/achievement'>Réalisations</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/legalNotice'>Mention Légales</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/achievement" element={<Achievement/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/legalNotice" element={<LegalNotice/>}></Route>
      </Routes>
    </div>
  );
}

export default Header;
