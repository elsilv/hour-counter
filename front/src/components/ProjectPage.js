import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';

export const ProjectPage = () => { 
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    const id = ProjectFunction()
    const { projects, getProjects } = useContext(GlobalContext);
    const project = projects.find(project => project._id === id)

    return (
        <> 
         <h2>{project.name}</h2>
         <p>{project.amount}</p>
         <p>{project.user.username}</p>
         <ul>
         {project.workingHours.map(workingHour =>
             <li>
                {workingHour}
            </li>
      )} </ul>
      <p></p>
        </>    
    )
}

export function ProjectFunction() {
    const { id } = useParams();

    return (
      id
    ) 
      
}