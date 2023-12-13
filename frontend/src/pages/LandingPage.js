// YourComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './LandingPage.css';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Employee from '../components/Employee';
import Form from '../components/Form';
import Footer from '../components/Footer';

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
                        <div className="HomeButton" onClick={toggleLeftSection}>Home</div>
                        <Employee />
                        {/* <div className="bottom-right-section">
                            <Form/>
                        </div> */}
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default LandingPage;