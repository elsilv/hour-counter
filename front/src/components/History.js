import React, { useContext, useEffect } from 'react';
import { UsedHours } from './UsedHours';
import { GlobalContext } from '../context/GlobalState';

export const History = () => {
    const { usedHours, getWorkingHours } = useContext(GlobalContext);

    useEffect(() => {
        getWorkingHours();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {usedHours.map
                    (usedHours => ( <UsedHours key={usedHours.id} usedHours={usedHours}/> ) ) }    
            </ul>
        </>
    )
}
