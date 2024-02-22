import React from 'react';

export default function ExperienceBlock({experiences}){
    experiences = experiences.sort((a, b) => {
        return new Date(a.fields.start_date).getTime() - new Date(b.fields.start_date).getTime()
    });
    return (
        <>
        {
            experiences.map((experience) => {
                const {position, company, description, working_period, skills} = experience.fields;
                return (
                    <div key={position} className="exp-block">
                        <div className="exp-timeline">
                            {working_period}
                        </div>
                        <div className="exp-position">
                            {position}
                        </div>
                        <div className="exp-company">
                            <i>{company}</i>
                        </div>
                        <div className="exp-description">
                            <ul>
                            {
                                description.map((descriptions) => {
                                    return (
                                        <li key={descriptions}>{descriptions}</li>
                                    );
                                })
                            }
                            </ul>
                        </div>
                        <div className="exp-skills">
                            <i>Skills related: </i><br />
                            {
                                skills.map((skill) => {
                                    return (
                                        <div key={skill}>{skill}</div>
                                    );
                                })
                            }
                        </div>
                    </div>
                );
            }).reverse()
        }
        </>
    );
}