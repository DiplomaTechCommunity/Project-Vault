import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    {
      label: "Home",
      path: "/home",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contribute",
      path: "/contribute",
    },
    {
      label: "GitHub",
      path: "/github",
    },
  ];

  return (
    <div>
     
        <nav id="Navbar">
          <h1>
            Project <span className="highlight">Vault</span>
          </h1>
            {menuOpen? <FaTimes className="menu" onClick={()=>setMenuOpen(!menuOpen)}/>  :<FaBars className="menu" onClick={()=>setMenuOpen(!menuOpen)}/>}
           
          <ul  className={(menuOpen)? "open": ""}>
            {navLinks.map((link, index) => {
              return (
                <NavLink key={index} to={link.path}>
                  <li>
                    {link.label}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;
