import React from 'react';
import SocialMedia from './SocialMedia';

export default function Homepage(props) {
    return (
        <div className="home background container">
            <div className="greeting">Hihi!</div>
            <div className="intro">I&apos;m Regina.</div>
            <div className="description">An Application Development Analyst at <span className="company">Accenture</span>.</div>
            <div className="resume">Check on my <a href="/assets/documents/reginaliew_resume2025.pdf" target="_blank">Resume</a></div>
            <SocialMedia theme={props.theme} />
        </div>
    );
}