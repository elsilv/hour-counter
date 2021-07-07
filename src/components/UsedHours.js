import React from 'react'

export const UsedHours = (props) => {
    const amount = props.usedHours.amount;

    return (
        <li className="minus">
                    {props.usedHours.text} <span>{amount}</span> <button className="delete-btn">x</button>
        </li>
    )
}
