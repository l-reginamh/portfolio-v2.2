"use client";
import React, {useState} from 'react';
import Navbar from "./Headers"
import Homepage from "./Homepage"
import About from "./About"
import Experience from "./Experience"
import Project from "./Project"
import Contact from "./Contact"
import Footer from "./Footer";

export default function Container(props) {
  const [screen, setScreen] = useState('Home')
  const [theme, setTheme] = useState('theme' ? 'dark' : 'light')
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <main className="app" data-theme={theme}>
    <div className="container">
        <Navbar theme={theme} themeChange={thetheme => switchTheme()} screen={[screen, setScreen]} />
        <Homepage theme={theme} />
        <About skills={props.skills} />
        <Experience experiences={props.experiences} />
        <Project theme={theme} projects={props.projects} />
        <Contact />
        <Footer />
    </div>
    </main>
  );
}
