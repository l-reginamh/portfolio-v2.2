import React from 'react';

export default function Skills({skills}) {
    return (
        <>
        {
            skills.map((skill) => {
                const {skills, frontend, backend, database, frameworks, tools} = skill.fields;
                return (
                    <div key={skills} className="skill-list">
                        <div className="skill-row row-1">
                            <div className="skill-item">
                                {
                                    backend.map((language, i, row) => {
                                        if (i+1 < row.length) {
                                            return language + ", "
                                        } else {
                                            return language
                                        }
                                    })
                                }
                            </div>
                            <div className="skill-item">
                                {
                                    database.map((language, i, row) => {
                                        if (i+1 < row.length) {
                                            return language + ", "
                                        } else {
                                            return language
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="skill-row row-2">
                            <div className="skill-item">
                                {
                                    frontend.map((language, i, row) => {
                                        if (i+1 < row.length) {
                                            return language + ", "
                                        } else {
                                            return language
                                        }
                                    })
                                }
                            </div>
                            <div className="skill-item">
                                {
                                    frameworks.map((language, i, row) => {
                                        if (i+1 < row.length) {
                                            return language + ", "
                                        } else {
                                            return language
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="skill-row row-3">
                            <div className="skill-item">
                                {
                                    tools.map((language, i, row) => {
                                        if (i+1 < row.length) {
                                            return language + ", "
                                        } else {
                                            return language
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                );
            })
        }
        </>
    );
}