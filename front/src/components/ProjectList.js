import React, { useContext, useEffect } from 'react';
import { ProjectsUsed } from './ProjectsUsed.js';
import { GlobalContext } from '../context/ProjectState';

export const ProjectList = () => {
    const { projects, getProjects } = useContext(GlobalContext);

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h3>Your projects</h3>
            <div class="projects-info">
            <ul className="list">
                {projects.map
                    (projects => ( <ProjectsUsed key={projects.id} projects={projects}/> ) ) }    
            </ul>
            </div>
        </>
    )
}
