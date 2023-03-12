import React from "react";
import Logo from "./logo";
import Nav from "./nav_header";
import '../Sass/Base/style.css'


function Header() {
    return (
        <header className="header">
            <Logo />
            <Nav />
        </header>
    );
}
    
export default Header;
