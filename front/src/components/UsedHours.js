import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import * as AiIcons from 'react-icons/ai';

export const UsedHours = (props) => {
    const { deleteHistory } = useContext(GlobalContext);

    const amount = props.workingHour.amount

    return (
        <li>
            {props.workingHour.text} <span>{amount}</span> 
            <button onClick={() => deleteHistory(props.workingHour._id)}
                className="delete-btn">  <AiIcons.AiOutlineCloseCircle/> </button>
        </li>
    )
}
