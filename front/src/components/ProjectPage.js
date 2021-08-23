import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';
import { GlobalContext2 } from '../context/GlobalState';

import { UsedHours } from './UsedHours';
import { AddHours } from './AddHours';
import { PrintPage } from './PrintPage';

export const ProjectPage = () => { 
    useEffect(() => {
        getProjects();
        getWorkingHours();
        // eslint-disable-next-line
    }, []);

    const id = ProjectFunction()
    const { projects, getProjects } = useContext(GlobalContext)
    const { usedHours, getWorkingHours } = useContext(GlobalContext2)

    const project = projects.find(project => project._id === id)
    var projectHours = usedHours.filter(workingHour => workingHour.project === id)

    if(!project) {
        return (<h3>Please wait</h3>)
    }

    const amounts = projectHours.map(workingHours => workingHours.amount)
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
             {projectHours.map(workingHour =>
                    <UsedHours key={workingHour._id} workingHour={workingHour} />
             )} 
        </ul>

        <AddHours />
        
        <PrintPage project={project}
                   totalAmounts={totalAmounts}
                   projectHoursLi={projectHours} />
        </>    
    )
}

export function ProjectFunction() {
    const { id } = useParams();

    return (
      id
    ) 
}
