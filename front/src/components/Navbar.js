import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarData } from './NavbarData';
import { IconContext } from 'react-icons';
import { Twirl as Hamburger } from 'hamburger-react';

export const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
    <>
    <IconContext.Provider value={{ color: '#d2bab8' }}> 
        <div className="navbar">
            <Link to="#" className='nav-click'>
            <Hamburger toggled={sidebar} toggle={setSidebar} color="#d2bab8"/>
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className="navbar-toggle">
                </li>
                {NavbarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span-nav>{item.title}</span-nav>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    </IconContext.Provider>   
    </>
    )
}
 