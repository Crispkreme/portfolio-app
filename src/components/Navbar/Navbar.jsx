import React, { useState } from 'react'
import './Navbar.css'
import { HiMenu, HiOutlineX } from "react-icons/hi";
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

            <nav className='nav-wrapper'>

                <img src="" alt="" className="logo" />

                <div className="nav-content">
                    <ul>
                        <li>
                            <a href="" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Work Experience</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            Hire Me
                        </button>
                    </ul>
                </div>

                <button className="menu-btn" onClick={toggleMenu}>
                    <div style={{ color: 'white', backgroundColor: 'transparent' }}>
                        {openMenu ? <HiOutlineX style={{ fontSize: "1.8rem" }} className={"material-symbols-outlined"} /> : <HiMenu style={{ fontSize: "1.8rem" }} className={"material-symbols-outlined"} />}
                    </div>
                </button>

            </nav>
        </>
    )
}

export default Navbar
