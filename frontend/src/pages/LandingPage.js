// YourComponent.js
import React, { useState } from 'react';
import './LandingPage.css'; // Import the CSS file
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Employee from '../components/Employee';
import  Form  from '../components/Form';

const LandingPage = () => {

    const [isLeftSectionVisible, setLeftSectionVisibility] = useState(true);

    const toggleLeftSection = () => {
        setLeftSectionVisibility(!isLeftSectionVisible);
    };



    return (
        <div className="container">
            <div className={`left-section ${isLeftSectionVisible ? '' : 'hidden'}`}>
                <Sidebar />
            </div>
            <div className="right-section">
                <div className="top-right-section">
                    {/* <Navbar /> */}
                </div>
                <div className="HomeButton" onClick={toggleLeftSection}>Home</div>
                <div className="bottom-right-section">
                    <Employee/>
                    <Form/>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;