import React from "react";
import './navbar.css'
import github from '../../assets/github.png'

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar"> 
                <a href="https://github.com/APM246/Spotify-Stats" target="_blank"> 
                    <img width="80px" height="80px" src={github} alt="github logo" /> 
                </a>
            </nav>
            {props.children}
        </React.Fragment>
    )
}

export default Navbar;