import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import * as TiIcons from 'react-icons/ti';

export const UsedHours = (props) => {
    const { deleteHistory } = useContext(GlobalContext);

    const amount = props.usedHours.amount;

    return (
        <li className="minus">
                    {props.usedHours.text} <span>{amount}</span> 
                    <button onClick={() => deleteHistory(props.usedHours._id)}
                    className="delete-btn">  <TiIcons.TiDelete/> </button>
        </li>
    )
}
