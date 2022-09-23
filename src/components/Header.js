import React from "react";
import Navbar from "./Navbar/Navbar"

function Header() {
  
  
    return (
      <div className ="row header_nav">
        <Navbar/>
        <div className="col-8 header"><h1>Recime</h1></div>
      </div>
    );
  }
  
  export default Header;