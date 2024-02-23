"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faMoon, faXmark, faBars);

export default function Headers(props) {
    const logoSrc = "/assets/images/logo-text.png";
    const logoDarkSrc = "/assets/images/logo-text-dark.png";
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const size = useWindowSize();
    function useWindowSize() {
      const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
      });
    
      useEffect(() => {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
      return windowSize;
    }
    useEffect(() => {
        if(size.width > 768) {
            setClick(false)
        } 
    }, []);
    return (
        <header className="header">
            <nav className="nav">
                <a href="/" className="nav-logo">
                    <Image
                        src={props.theme == "light" ? logoSrc : logoDarkSrc}
                        alt="reg"
                        width={30}
                        height={30}
                    />
                </a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#project" className="nav-link">Project</a>
                        </li>
                        <li className="nav-item">
                            <a href="#getintouch" className="nav-link">Get In Touch</a>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="theme-toggle" onClick={() => props.themeChange()}>
                                <FontAwesomeIcon icon="sun" className="light" /> / <FontAwesomeIcon icon="moon" className="dark" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="nav-mobile">
                <a href="index.html" className="nav-logo">
                    <Image
                        src={props.theme == "light" ? logoSrc : logoDarkSrc}
                        alt="reg"
                        width={30}
                        height={30}
                    />
                </a>
                <button className="nav-btn">
                    <FontAwesomeIcon icon={click ? "xmark" : "bars"} onClick={handleClick}/>
                </button>
            </nav>
            <div className={click ? "nav-mobile-menu show" : "nav-mobile-menu hide"}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#experience" className="nav-link">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a href="#project" className="nav-link">Project</a>
                    </li>
                    <li className="nav-item">
                        <a href="#getintouch" className="nav-link">Get In Touch</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="theme-toggle" onClick={() => props.themeChange()}>
                            <FontAwesomeIcon icon="sun" className="light" /> / <FontAwesomeIcon icon="moon" className="dark" />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}