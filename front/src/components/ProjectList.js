import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsUsed } from './ProjectsUsed.js';
import { GlobalContext } from '../context/ProjectState';
const jwt = require('jsonwebtoken');

export const ProjectList = () => {
    const { projects, getProjects } = useContext(GlobalContext)

    useEffect(() => {       
      if (!localStorage.getItem("authToken")) {
            history.push("/login")
        }

        getProjects();
        // eslint-disable-next-line
    }, []);

    
    const history = useHistory()

    const authToken = localStorage.getItem("authToken")
    const userId = jwt.decode(authToken)
    
    if(!userId) {
        return (
            <h3>Please log in first</h3>
        )
    }

    var usersProjects = projects.filter(project => project.user._id === userId.id)

    return (
        <>
        <section className="pages-list">
        <div className="text">
            <h3>Your projects</h3>
            <div className="projects-info">
            <ul className="list">
                {usersProjects.map
                    (projects => ( <ProjectsUsed key={projects.id} projects={projects}/> ) ) }    
            </ul>
            </div></div>
            </section>    
        </>
    )
}
