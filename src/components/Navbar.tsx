import image from "assets/images/logo.png";
import React from 'react';
function Navbar(props: any) {
    return (
        <nav className={"navbar navbar-light bg-light " + (props.class === "home" ? "d-block" : "border rounded")}>
            <a className="navbar-brand float-left" href={'/'} >
                <img src={image} width="30" height="30" className="d-inline-block align-top" alt="logo"></img>Movies
            </a>
        </nav >
    )
}

export default Navbar;