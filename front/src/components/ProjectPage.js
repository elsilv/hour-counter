import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';

import { UsedHours } from './UsedHours';

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
         <p></p>
         <p>Hours to use total: {project.amount}</p>
         <p></p>
         <h3>History</h3>

         <ul className="list">
             {project.workingHours.map(workingHour =>
                <li key={workingHour._id}>
                    <UsedHours key={workingHour._id} workingHour={workingHour} />
                </li>
             )} 
        </ul>
        </>    
    )
}

export function ProjectFunction() {
    const { id } = useParams();

    return (
      id
    ) 
      
}