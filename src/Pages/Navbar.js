import './Navbar.css'
import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'

function Navbar() {

    const [toogle, setToogle] = useState(false);
    const handleToogle = () => {
        setToogle(!toogle);
        console.log(toogle);
    }

    return (
        <>
            <nav>
                <div className="logo">
                    <p>Portfolio.io</p>
                </div>
                <div className={!toogle ? "hide" : 'show'}>
                    <ul>
                        <li><NavLink to='/' className='nav-links'>Home</NavLink></li>
                        <li><NavLink to='/projects' className='nav-links'>Project</NavLink></li>
                        <li><NavLink to='/about' className='nav-links'>About</NavLink></li>
                        <li><NavLink to='/contact' className='nav-links'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="hamberger-icon" onClick={handleToogle}>
                    {
                        !toogle ?
                            <MdMenu className='open' />
                            : <MdClose className='close' />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar