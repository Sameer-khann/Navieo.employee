
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Employee from '../components/Employee';
import Form from '../components/Form';
import Footer from '../components/Footer';
import homeIcon from '../assets/img/icons8-menu-52.png'
import { Link } from 'react-router-dom';

export default function Alltasks() {

    const [isLeftSectionVisible, setLeftSectionVisibility] = useState(true);

    const toggleLeftSection = () => {
        setLeftSectionVisibility(!isLeftSectionVisible);
    };


    return (
        <>

            <div className="LandingPage">
                <Navbar />
                <div className="container">
                    <div className={`left-section ${isLeftSectionVisible ? '' : 'hidden'}`}>
                        <Sidebar />
                    </div>
                    <div className={`right-section ${isLeftSectionVisible ? '' : 'right-sectionH'}`}>
                        <div className="HomeButton" onClick={toggleLeftSection}>
                            <img src={homeIcon} alt="" />
                        </div>
                        <div className="flex items-center flex-col  shadow-xl rounded-xl ml-10 h-92 p-4 m-10 bg-slate-400" >
                            <div className='flex justify-between p-4 w-[40rem]' >
                                <Link to="/">
                                    <div className='textALLview'>&larr;back</div>
                                </Link>
                                <div>All task</div>
                            </div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                        </div>

                        <Footer />

                    </div>
                </div>
            </div>


        </>
    )
}
