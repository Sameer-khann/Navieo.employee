// YourComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './AdminLanding.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import homeIcon from '../assets/img/icons8-menu-52.png'
import AdminSideBar from '../AdminComponents/AdminSideBar';
import Admin from '../AdminComponents/Admin';

const AdminLandingPage = () => {

    const [isLeftSectionVisible, setLeftSectionVisibility] = useState(true);

    const toggleLeftSection = () => {
        setLeftSectionVisibility(!isLeftSectionVisible);
    };



    return (
        <>
            <div className="AdminLandingPage">
                <Navbar />
                <div className="Admin-container">
                    <div className={`Admin-left-section ${isLeftSectionVisible ? '' : 'Admin-hidden'}`}>
                        <AdminSideBar />
                    </div>
                    <div className={`Admin-right-section ${isLeftSectionVisible ? '' : 'Admin-right-sectionH'}`}>
                    <div className="Admin-HomeButton" onClick={toggleLeftSection}>
                            <img src={homeIcon} alt="" />
                        </div>
                        <Admin />
                        <Footer />

                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLandingPage;