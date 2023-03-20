import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav>
         <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      
    </nav>
  );
};

export default Navbar;
