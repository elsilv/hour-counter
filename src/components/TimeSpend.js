import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const TimeSpend = () => {
    const { usedHours } = useContext(GlobalContext);

    const amounts = usedHours.map(usedHours => usedHours.amount);
    const totalAmounts = amounts.reduce((x, total) => (x += total), 0);

    return (
        <>
            <h3>Time you have used:</h3>
            <h2>{totalAmounts}</h2>
        </>
    )
}
