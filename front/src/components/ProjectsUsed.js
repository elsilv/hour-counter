import React, {useContext} from 'react'
import { GlobalContext } from '../context/ProjectState';
import * as AiIcons from 'react-icons/ai';

export const ProjectsUsed = (props) => {
    const { deleteProject } = useContext(GlobalContext);

    const amount = props.projects.amount;

    return (
        <li className="minus">
                    {props.projects.name} <span>{amount}</span> 
                    {props.projects.user.email} 
                    <button onClick={() => deleteProject(props.projects._id)}
                    className="delete-btn">  <AiIcons.AiOutlineCloseCircle/> </button>
        </li>
    )
}
