import React, { useState, useEffect, use } from 'react';
import ExperienceBlock from './ExperienceBlock';

export default function Experience({experiences}) {
    return (
        <div id='experience' className='exp background container'>
            <div className="vertical-title">
                Experience
            </div>
            <div className="content">
                <div className="exp-list">
                    <ExperienceBlock experiences={experiences} />
                </div>
            </div>
        </div>
    );
}