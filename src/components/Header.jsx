import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleIndex, setToggleIndex] = useState(0);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
    setToggleIndex(toggleIndex === 0 ? 1 : 0);
  };

  const svgs = [
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path stroke="#344054" d="M6.25 25h37.5"/>
        <path stroke="#306CFE" d="M6.25 12.5h25m-12.5 25h25"/>
      </g>
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
      <path fill="currentColor" d="M16.846 6h1.985l-4.13 4.405a3.75 3.75 0 0 1-2.7 1.17a3.74 3.74 0 0 1-2.703-1.17L5.163 6h1.991l3.134 3.374c.917.973 2.507.973 3.425 0zM7.127 17.993H5.143l4.155-4.391a3.75 3.75 0 0 1 2.705-1.171a3.75 3.75 0 0 1 2.705 1.171L18.858 18h-1.985l-3.153-3.36a2.374 2.374 0 0 0-3.426 0z"/>
    </svg>
  ];

  return (
    <>
      <img className="logo" src="src/path/logo.png" alt="Mon logo" />
      <h1 className="title">Samba | MegasterPro</h1>
      
      <span onClick={toggleMenu} className={isMobile ? "mobile" : ""} id="menu">
        {svgs[toggleIndex]}
      </span>

      {/* On passe l'état isMobile à Nav */}
      <Nav isMobile={isMobile} />
    </>
  );
};

export default Header;