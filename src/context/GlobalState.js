import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    usedHours: [] 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteHistory(id) {
        dispatch({
            type: 'DELETE_HISTORY', 
            payload: id
        });
    }

    function addHours(usedHours) {
        dispatch({
            type: 'ADD_HOURS', 
            payload: usedHours
        });
    }

    return (<GlobalContext.Provider value={ { usedHours: state.usedHours, deleteHistory, addHours } }>
        {children}
    </GlobalContext.Provider>);
}