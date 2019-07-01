import React from 'react';
import Logo from './assets/image/Capture-1.png';
import LinkedInImg from './assets/image/linkedin-chris.png';
import emailimg from './assets/image/Untitled-1.png';
import githubicon from './assets/image/github_600969.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__content container">
                <div className="header__content--logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="header__content--right">
                    <a href="mailto:sam4414@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailimg} alt="email-icon"/></a>
                    <a href="https://github.com/ChrisSHDev" target="_blank" rel="noopener noreferrer"><img src={githubicon} alt="github"/></a>
                    <a href="https://www.linkedin.com/in/chris0320/" target="_blank" rel="noopener noreferrer"><img src={LinkedInImg} alt="linked-in"/></a>
                </div>
            </div>
        </header>
    );
};

export default Header;