import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectsUsed } from './ProjectsUsed.js';
import { GlobalContext } from '../context/ProjectState';
import ReactTooltip from 'react-tooltip';
import * as AiIcons from 'react-icons/ai';
const jwt = require('jsonwebtoken');


export const ProjectList = () => {
    useEffect(() => {       
      if (!localStorage.getItem("authToken")) {
            history.push("/login")
        }

        getProjects();
        // eslint-disable-next-line
    }, []);

    const { projects, getProjects } = useContext(GlobalContext)
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
        <ReactTooltip id="refresh" place="right" effect="float"/>
        <section className="pages-list">
        <div className="text">
            <h3>Your projects </h3>
            
            <button data-tip="Refresh list" data-for="refresh" className="refresh-btn" onClick={() => getProjects()}>  <AiIcons.AiOutlineReload size={20}/> </button>
            <div className="projects-info">
            <ul className="list">
                {usersProjects.map
                    (projects => ( <ProjectsUsed key={projects._id} projects={projects}/> ) ) }    
            </ul>
            </div>
        </div>
        </section>    
        </>
    )
}
