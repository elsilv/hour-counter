import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';
import ReactTooltip from 'react-tooltip';
import * as AiIcons from 'react-icons/ai';

export const ProjectsUsed = (props) => {
    const { deleteProject } = useContext(GlobalContext);

    const amount = props.projects.amount;

    return (
       <>
        <div className="one-project">
                   <h3>{props.projects.name} </h3> 
                   <p>Hours planned to use: <span>{amount}</span></p>  
                   <p>{props.projects.description}</p>
                   <p className="icons"> 
                   <ReactTooltip place="bottom" effect="float"/>
                    <p2>
                      <Link data-tip="On project page" className="project-list-btn" id="page-link" to={`/projects/${props.projects._id}`}><AiIcons.AiOutlineFolderOpen size={20}/></Link>
                    </p2>
                    <p2>
                      <button data-tip="Edit" className="project-list-btn">  <AiIcons.AiOutlineEdit size={20}/> </button>
                    </p2>
                    <p2>
                      <button className="project-list-btn" data-tip="Remove project" onClick={() => deleteProject(props.projects._id)}>  <AiIcons.AiOutlineDelete size={20}/></button>
                    </p2>
                  </p>
        </div>       
      </>
    )
}
