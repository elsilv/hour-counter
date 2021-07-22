import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    usedHours: [],
    error: null 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getWorkingHours() {
        try {
            const res = await axios.get('/api/workingHours');
            dispatch({
                type: 'GET_WORKINGHOURS',
                payload: res.data.data
            })
        } catch (error) {
            dispatch({
                type: 'WORKINGHOURS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    async function deleteHistory(id) {
        try {
            await axios.delete(`/api//workingHours/${id}`);
            dispatch({
                type: 'DELETE_HISTORY', 
                payload: id
            });
        } catch (error) {
            dispatch({
                type: 'WORKINGHOURS_ERROR',
                payload: error.response.data.error
            })
        }
     
    }

    async function addHours(usedHours) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/workingHours', usedHours, config)
            dispatch({
                type: 'ADD_HOURS', 
                payload: res.data.data
            });
        } catch (error) {
            dispatch({
                type: 'WORKINGHOURS_ERROR',
                payload: error.response.data.error
            })
        }
    }

    return (<GlobalContext.Provider value={ { usedHours: state.usedHours, 
                                              deleteHistory, 
                                              addHours, 
                                              getWorkingHours, 
                                              error: state.error } }>
        {children}
    </GlobalContext.Provider>);
}