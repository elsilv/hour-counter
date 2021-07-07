import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    usedHours: [
        { id: 1, text: 'Perehdyin kurssin vaatimuksiin', amount: 2},
        { id: 2, text: 'Luin kirjan ensimmäisen kappaleen', amount: 3},
        { id: 3, text: 'Osallistuin luennolle', amount: 1.5},
        { id: 4, text: 'Tein viikkon demot', amount: 5}
    ] 
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={ { usedHours: state.usedHours } }>
        {children}
    </GlobalContext.Provider>);
}