import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import homeIcon from "../assets/img/icons8-menu-52.png";
import emp from "../assets/img/icons8-employee-64.png";
import percentage from "../assets/img/icons8-percentage-64.png";
import check from "../assets/img/icons8-calendar-check-96.png";
import application from "../assets/img/icons8-application-100.png";
import PieChart from "../components/PieChart";
//import Calendar from "react-calendar";
import CalenderAttendance from "../components/CalenderAttendance";
//import "../components/AttendanceCalender.css";
//import 'react-calendar/dist/Calendar.css'
const Attendance = () => {
  const [isLeftSectionVisible, setLeftSectionVisibility] = useState(true);

  const toggleLeftSection = () => {
    setLeftSectionVisibility(!isLeftSectionVisible);
  };
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="LandingPage">
        <Navbar />
        <div className="container">
          <div
            className={`left-section ${isLeftSectionVisible ? "" : "hidden"}`}
          >
            <Sidebar />
          </div>
          <div
            className={`right-section ${
              isLeftSectionVisible ? "" : "right-sectionH"
            }`}
          >
            <div className="HomeButton" onClick={toggleLeftSection}>
              <img src={homeIcon} alt="" />
            </div>

            <div className="bg-gray-400 min-h-screen p-4 m-10 rounded-lg">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="bg-slate-600 h-48 w-48 mx-10 rounded-2xl items-center flex flex-col justify-center">
                    <img src={emp} className="h-20" alt=""></img>
                    <h1>Your Attendance</h1>
                    <h1>26/30</h1>
                  </div>
                  <div className="bg-slate-600 h-48 w-48 mx-10 rounded-2xl items-center flex flex-col justify-center">
                  <img src={percentage} className="h-20" alt=""></img>
                    <h1>Percentage</h1>
                    <h1>86%</h1>
                  </div>
                  <div className="bg-slate-600 h-48 w-48 mx-10 rounded-2xl items-center flex flex-col justify-center">
                  <img src={check} className="h-20" alt=""></img>
                    <h1>Total Leaves</h1>
                    <h1>2 days</h1>
                  </div>
                  <div className="bg-slate-600 h-48 w-48 mx-10 rounded-2xl items-center flex flex-col justify-center">
                  <img src={application} className="h-20" alt=""></img>
                    <h1>Apply For Leave</h1>
                  </div>
                </div>
                <div className=" flex items-center justify-center">
                  <div className="bg-slate-600 h-[34rem] w-[72rem] p-4 mt-[4rem]  rounded-3xl">
                  <h1 className="font-bold px-4 py-4 text-xl">Attendance overview</h1>
                    <div className="flex item-center">
                        <div className="bg-gray-400 h-[27rem] w-[70rem] opacity-50 rounded-3xl items-center">
                      {/*  <Calendar onChange={date => setDate(date)}value={date} classname={['c1','c2']} />*/}
                      <CalenderAttendance/>
                        </div>
                        <div className="items-center mt-20 ml-20 mr-10">
                            <PieChart/>
                            <h1 className="items-center font-bold ml-8 text-2xl">86 % Attendance</h1>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
export default Attendance;
