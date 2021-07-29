import React, {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../context/ProjectState';

export const ProjectPage = () => { 
    const id = ProjectFunction()

    const { projects, getProjects } = useContext(GlobalContext);

    return (
        <> 
         <p>{id}</p>
        </>    
    )
}

export function ProjectFunction() {
    const { id } = useParams();

    return (
      id
    ) 
      
}