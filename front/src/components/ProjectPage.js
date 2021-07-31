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
         <p>Hours to use total: {project.amount}</p>
         <ul>
             <h3>History</h3>
         {project.workingHours.map(workingHour =>
             <li key={workingHour._id}>
                {workingHour.text}
                {workingHour.amount}
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