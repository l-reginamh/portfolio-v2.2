import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectBlock from './ProjectBlock';

export default function Project(props) {
    return (
        <div id='project' className='proj background container'>
            <div className="vertical-title">
                Project
            </div>
            <div className="content">
                <div className="project-list">
                    <ProjectBlock projects={props.projects} theme={props.theme} />
                </div>
            </div>
        </div>
    );
}