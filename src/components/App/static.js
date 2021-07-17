import React from "react";
import './static.css'
import github from '../../assets/github.png'

const Static = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar"> 
                <a href="https://github.com/APM246/Spotify-Stats" target="_blank"> 
                    <img width="60px" height="60px" src={github} alt="github logo" /> 
                </a>
            </nav>
            {props.children}
            <footer className="footer"> It's still a bit buggy don't kill me </footer>
        </React.Fragment>
    )
}

export default Static;