import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import menutrigger from "../img/icons8-menu-26.png"
// import closetrigger from "../img/icons8-close-24.png"



export default function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>YOURDEVELOPER01</h1>
                </div>
                <div className="navlist">
                    <button className="button-867" onClick={handleToggleSidebar}>
                        {/* <img src={menutrigger} alt="" /> */}
                    </button>
                    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                        <button className="button-867" onClick={handleToggleSidebar}>
                            {/* <img src={closetrigger} alt="" /> */}
                        </button>
                        <div className="navbarlist">
                            <div className='list'>
                                <p href="/">Home</p>
                                <p href="/"><Link className="" to="../pages/Project">
                                    Projects
                                </Link></p>
                                <p href="/about">About</p>
                                <p href="/contact">Contact</p>
                                <p href="/services">Services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}