import React, {useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';

import { UsedHours } from './UsedHours';
import { AddHours } from './AddHours';

export const ProjectPage = () => { 
    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, []);

    const id = ProjectFunction()
    const { projects, getProjects } = useContext(GlobalContext);
    const project = projects.find(project => project._id === id)

    const amounts = project.workingHours.map(workingHours => workingHours.amount)
    const totalAmounts = amounts.reduce((x, total) => (x += total), 0);

    return (
        <> 
         <h2>{project.name}</h2>
         <h3>Time you have used: {totalAmounts} hours</h3>
         <p></p>
         <p>Hours to use total: {project.amount}</p>

         <div className="hour-container">
            <div>
                <h3>Total hours</h3>
                <p className="hours-plus">{totalAmounts}</p>
            </div>
            <div>
            <h3>Hours left</h3>
            <p className="hours-minus">{project.amount - totalAmounts}</p>
            </div>
        </div>

         <h3>History</h3>

         <ul className="list">
             {project.workingHours.map(workingHour =>
                    <UsedHours key={workingHour._id} workingHour={workingHour} />
             )} 
        </ul>

        <AddHours />
        </>    
    )
}

export function ProjectFunction() {
    const { id } = useParams();

    return (
      id
    ) 
}