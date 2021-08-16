import React, {useContext} from 'react'
import { GlobalContext2 } from '../context/GlobalState';
import * as AiIcons from 'react-icons/ai';

export const UsedHours = (props) => {
    const { deleteHistory } = useContext(GlobalContext2);

    const amount = props.workingHour.amount
    const created = (props.workingHour.created).slice(0, 10)

    return (
        <li>
            {props.workingHour.text} <span>{amount}</span> <span>{created}</span> 
            <button onClick={() => deleteHistory(props.workingHour._id)}
                className="delete-btn">  <AiIcons.AiOutlineCloseCircle/> </button>
        </li>
    )
}
