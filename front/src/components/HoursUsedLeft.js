import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const HoursUsedLeft = () => {
  const { usedHours } = useContext(GlobalContext);
  const amounts = usedHours.map((usedHours) => usedHours.amount);
  const totalAmounts = amounts.reduce((x, total) => (x += total), 0);

  return (
    <div className="hour-container">
      <div>
        <h3>Total hours</h3>
        <p className="hours-plus">{totalAmounts}</p>
      </div>
      <div>
        <h3>Hours left</h3>
        <p className="hours-minus">{100 - totalAmounts}</p>
      </div>
    </div>
  );
};
