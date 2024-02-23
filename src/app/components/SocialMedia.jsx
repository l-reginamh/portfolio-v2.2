import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, fab, faLinkedin, faGithub);

export default function SocialMedia({theme}) {
    return (
        <div className="social-media">
            <ul className="social-media-list">
                <li className="social-media-item">
                    <a href="mailto:reginaliew9@gmail.com">
                        <FontAwesomeIcon icon={["fas", "envelope"]} />
                        <box-icon name="envelope" type="solid" color={theme=="dark"?"#FFD232":"#004E60"}></box-icon>
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="https://linkedin.com/in/mhliew-regina" target="_blank">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                        <box-icon name="linkedin-square" type="logo" color={theme=="dark"?"#FFD232":"#004E60"}></box-icon>
                    </a>
                </li>
                <li className="social-media-item">
                    <a href="https://github.com/l-reginamh" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} />
                        <box-icon name="github" type="logo" color={theme=="dark"?"#FFD232":"#004E60"}></box-icon>
                    </a>
                </li>
            </ul>
        </div>
    );
}