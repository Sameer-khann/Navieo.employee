// YourComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Employee from '../components/Employee';
import Form from '../components/Form';
import Footer from '../components/Footer';

import homeIcon from '../assets/img/icons8-menu-52.png'

const LandingPage = () => {

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
                        <Employee />
                        {/* <div className="bottom-right-section">
                            <Form/>
                        </div> */}
                                        <Footer />

                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;