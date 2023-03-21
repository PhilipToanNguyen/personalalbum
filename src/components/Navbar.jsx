import React, { useState } from "react";
import logo from '../img/logo.png';
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import "../index.css"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
  <nav>
     <div className="wholenav">
      <div className="logo">
      <Link to="/"> <img   src={logo}  alt="logoen" /></Link>
      </div>
      </div>

      
   
  </nav>
   
  );
};

export default Navbar;
