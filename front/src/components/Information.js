import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/ProjectState';
import { GlobalContext2 } from '../context/GlobalState';
import * as FlatIcons from "react-icons/fc";
const jwt = require('jsonwebtoken');

export const Information = () => {
    const { projects, getProjects } = useContext(GlobalContext)
    const { usedHours, getWorkingHours } = useContext(GlobalContext2)

    useEffect(() => {       
          getProjects();
          getWorkingHours();
          // eslint-disable-next-line
      }, []);

    const authToken = localStorage.getItem("authToken")
    const userId = jwt.decode(authToken)

    var usersProjects = projects.filter(project => project.user._id === userId.id)

    const amounts = usersProjects.map(project => project.amount);
    const plannedTotalHours = amounts.reduce((x, total) => (x += total), 0);

    const completedProjects = usersProjects.filter(project => project.completed === true).length

    return(
    <div className="container2">
            <h2> Data </h2>
            <p>Find some information...</p>
            
            <section className="information">
            <ul className="list"> 
            <li>
            <div className="data-grid3">
                <div> <FlatIcons.FcCalendar/> </div> <div>Time you have planned to use total</div> <div>{plannedTotalHours}</div>
            </div> 
            </li>
            <li>
            <div className="data-grid3">
                <div> <FlatIcons.FcClock/> </div> <div>Time you have used total</div> <div>{plannedTotalHours}</div>
            </div> 
            </li>
            <li>
            <div className="data-grid4">
                <div> <FlatIcons.FcApproval/> </div> <div>Käytetyin projekti</div> <div>Projektin nimi</div> <div>220h</div>
            </div>
            </li>
            <li>
            <div className="data-grid3">
                <div> <FlatIcons.FcInspection/> </div> <div>Number of completed projects</div> <div>{ completedProjects }</div>
            </div>
            </li>
            </ul>
            </section>
            
        </div>
    )
}

export default Information;