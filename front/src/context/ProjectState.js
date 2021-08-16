import React, { createContext, useReducer } from 'react';
import ProjectReducer from './ProjectReducer';
import axios from 'axios';

const initialState = {
    projects: [],
    error: null 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider2 = ( {children} ) => {
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    async function getProjects() {
        try {
            const res = await axios.get('/api/projects');
            dispatch({
                type: 'GET_PROJECTS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'PROJECT_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function deleteProject(id) {
        try {
            await axios.delete(`/api/projects/${id}`);
            dispatch({
                type: 'DELETE_PROJECT', 
                payload: id
            })
        } catch (error) {
            dispatch({
                type: 'PROJECT_ERROR',
                payload: error.response.data.error
            })
        }
     
    }

    async function addProject(projects) {
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`
            }
        }

        try {
            const res = await axios.post('/api/projects', projects, config)
            dispatch({
                type: 'ADD_PROJECT', 
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'PROJECT_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value={ { projects: state.projects, 
                                              deleteProject, 
                                              addProject, 
                                              getProjects, 
                                              error: state.error } }>
        {children}
    </GlobalContext.Provider>);
}