import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';
import * as AiIcons from 'react-icons/ai';

export const ProjectsUsed = (props) => {
    const { deleteProject } = useContext(GlobalContext);

    const amount = props.projects.amount;

    return (
       <>
        <div>
                   <h3>{props.projects.name}</h3> 
                   <p>Hours planned to use: <span>{amount}</span></p>  
                   <Link id="page-link" to={`/projects/${props.projects._id}`}><AiIcons.AiOutlineArrowRight/> {props.projects.name}</Link>
                   <p>Tässä voisi olla lyhyt käyttäjän lisäämä kuvaus projektista</p>
                   <button onClick={() => deleteProject(props.projects._id)}
                   className="delete-project-btn">  <AiIcons.AiOutlineCloseCircle/> 
                   </button>
        </div>         
      </>
    )
}
