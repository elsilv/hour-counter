import React, { useContext } from 'react';
import { UsedHours } from './UsedHours';
import { GlobalContext } from '../context/GlobalState';

export const History = () => {
    const { usedHours } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {usedHours.map(usedHours => ( <UsedHours key={usedHours.id} usedHours={usedHours}/> ))}   
            </ul>
        </>
    )
}
