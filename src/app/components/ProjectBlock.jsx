import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGithub, faLink);

export default function  ProjectBlock({ projects, theme }) {
    projects = projects.sort((a, b) => {
        return a.fields.sorting - b.fields.sorting
    });
    return (
        <>
            {
                projects.map((project) => {
                    const { name, description, company, techstack, githublink, demo } = project.fields;
                    return (
                        <div key={name} className="proj-block">
                            <div className="proj-title">
                                {name}
                            </div>
                            <div className="proj-techstack">
                                <span>Tech Stack: </span>{techstack.map((language, i, row) => { if (i+1 === row.length) { return language } else { return language + ", " }})}
                            </div>
                            <div className="proj-description">
                                {description}
                            </div>
                            {
                                typeof company === "undefined" && 
                                <div className="proj-link">
                                    <a href={githublink} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fab", "github"]} />
                                    </a>
                                    <a href={demo} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={["fas", "link"]} />
                                    </a>
                                </div>
                            }
                        </div>
                    );
                }).reverse()
            }
        </>
    );
}