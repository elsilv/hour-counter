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
                   <h3>{props.projects.name} </h3> 
                   <p>Hours planned to use: <span>{amount}</span></p>  
                   <p>{props.projects.description}</p>
                   <p className="icons"> 
                   <p2>
                      <button className="project-list-btn" onClick={() => deleteProject(props.projects._id)}>  <AiIcons.AiOutlineCloseCircle size={20} title="Delete project"/> 
                      </button>
                    </p2>
                    <p2>
                      <Link className="project-list-btn" id="page-link" to={`/projects/${props.projects._id}`}><AiIcons.AiOutlineFolderOpen size={20} title="On project page"/></Link>
                    </p2>
                    <p2>
                    <button className="project-list-btn" onClick>  <AiIcons.AiOutlineEdit size={20} title="Edit project"/> </button>
                    </p2>
                  </p>
        </div>       
      </>
    )
}
