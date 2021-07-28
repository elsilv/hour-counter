import React, {useContext} from 'react'
import { GlobalContext } from '../context/ProjectState';
import * as AiIcons from 'react-icons/ai';

export const ProjectsUsed = (props) => {
    const { deleteProject } = useContext(GlobalContext);

    const amount = props.projects.amount;

    return (
       <>
        <div className="container">
                   <h3>{props.projects.name}</h3> 
                   <p>Hours used: {amount}</p> 
                   <p>{props.projects.user.email}</p> 
                    <button onClick={() => deleteProject(props.projects._id)}
                    className="delete-project">  <AiIcons.AiOutlineCloseCircle/> </button>
        </div>         
      </>
    )
}
