import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
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
                   <Link to={`/projects/${props.projects._id}`}>{props.projects.name}</Link>
                   <p>Tässä voisi olla lyhyt käyttäjän lisäämä kuvaus projektista</p>
                   <button onClick={() => deleteProject(props.projects._id)}
                   className="delete-project">  <AiIcons.AiOutlineCloseCircle/> 
                   </button>
        </div>         
      </>
    )
}
