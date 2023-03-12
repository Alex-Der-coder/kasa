import React from "react";


  
  function Logo({ isFooter }) {
    return (
      <div className={`logo ${isFooter ? "footer-logo" : ""}`}>
      </div>
    );
  }
  
  export default Logo;
  