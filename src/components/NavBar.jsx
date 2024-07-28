import React from "react";
import "./NavBar.css";
import { memo } from "react";
// import Button from './Button.jsx'
const NavBar = ({adjective,getAdjective}) => {
  console.log("NavBar is reRendered");
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>{adjective}</li>
          <button onClick={()=>{getAdjective()}}>change me</button>
        </ul>
      </nav>
    </>
  );
};

export default memo(NavBar);
