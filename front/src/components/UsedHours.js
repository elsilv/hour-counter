import React, { useContext } from "react";
import { GlobalContext2 } from "../context/GlobalState";
import * as AiIcons from "react-icons/ai";

export const UsedHours = (props) => {
  const { deleteHistory } = useContext(GlobalContext2);

  const amount = props.workingHour.amount;
  const created = props.workingHour.created.slice(0, 10);

  return (
    <li>
      <div className="grid-list">
        <div>
          <button
            onClick={() => deleteHistory(props.workingHour._id)}
            className="delete-btn"
          >
            <AiIcons.AiOutlineCloseCircle />
          </button>
        </div>
        <div>{props.workingHour.text}</div>
        <div>
          <span>{amount}</span>
        </div>
        <div>
          <span>{created}</span>
        </div>
      </div>
    </li>
  );
};
