import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const Header = () => {
    return (
        <> 
            <div className="header">
            <AiIcons.AiOutlineClockCircle size={50}/>
                <div className="title">
                    Time Tracker
                </div>
            </div>
        </>
    )
}
