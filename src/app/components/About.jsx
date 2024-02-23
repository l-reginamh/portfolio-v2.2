import React from 'react';
import Image from 'next/image';
import Skills from './Skills';

export default function About({skills}){
    return (
        <div id="about" className="about background container">
            <div className="vertical-title">
                About me
            </div>
            <div className="content">
                <div className="about-img">
                    <Image 
                        src="/assets/images/profile.png"
                        alt="Profile"
                        width={279}
                        height={279}
                    />
                </div>
                <div className="about-description">
                    <br /><br />
                    Hey there! My name is Regina, software engineer at <span className="company">Accenture</span> based in Malaysia.<br />
                    I can speak in <span className="primary">English</span>, <span className="secondary">Mandarin</span>, <span className="secondary">Cantonese</span>, and <span className="tertiary">Malay</span>. My favourite activities are singing and doing handicraft.<br />
                    <br /><br />
                    Currently, I&apos;m doing a refreshing on my Java knowlegde and also learning React. Besides learning programming language and frameworks, I&apos;m also learning UIUX design occasionally.
                </div>
            </div>
            <div className="skills">
                <div className="title">
                    Skills
                </div>
                <Skills skills={skills} />
            </div>
        </div>
    );
}