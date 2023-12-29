import React, { useState } from 'react';
import './AdminLanding.css';
import './AdminAlltasks.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import homeIcon from '../assets/img/icons8-menu-52.png'
import { Link } from 'react-router-dom';
import AdminSideBar from '../AdminComponents/AdminSideBar';

export default function AdminAlltasks() {

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
                        <div className="flex items-center flex-col  shadow-xl rounded-xl ml-10 h-92 p-4 m-10 AdminAllTasksBox" >
                            <div className='flex justify-between p-4 w-[40rem]' >
                                <Link to="/Admin">
                                    <div className='textALLview'>&larr;back</div>
                                </Link>
                                <div>All task</div>
                            </div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                            <div className="AdminAllTasksInputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                        </div>
                        <Footer />

                    </div>
                </div>
            </div>


        </>
    )
}
