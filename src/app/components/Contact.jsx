import React from 'react';

export default function Contact() {
    return (
        <div id="getintouch" className="contact background container">
            <div className="vertical-title">
                Get In Touch
            </div>
            <div className="content">
                <div className="contact-description">
                Although I&apos;m not open for new opportunity currently but feel free to connect with me!
                </div>
                <div className="contact-options">
                    <a href="mailto:reginaliew9@gmail.com" className="contact-option contact-option-1">Inbox me</a>
                    <a href="https://linkedin.com/in/mhliew-regina" target="_blank" className="contact-option contact-option-2">LinkedIn Connection</a>
                    <a href="https://github.com/l-reginamh" target="_blank" className="contact-option contact-option-3">Checkout my Github</a>
                    <a href="https://reggienotes.vercel.app/" target="_blank" className="contact-option contact-option-1">Learn more with my Blog</a>
                </div>
            </div>
        </div>
    );
}