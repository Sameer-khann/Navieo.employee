import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calender.css";
import emp from '../assets/img/emp.png';
import Emplogs from './Emplogs';


const Employee = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div>
                <div className=" ml-5 flex mt-5 h-66">
                    <div className=" bg-slate-400 w-60 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-60 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-60 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-60 p-20 m-5 rounded-lg"></div>
                </div>
                <div className='flex flex-row w-[68rem] h-80vh'>
                    <div className="Emp ">
                        <div className='flex '>
                            <div>
                                <div className='boxwithcalender shadow-xl mt-4 rounded-xl  ml-15 h-96 p-10 m-10  bg-slate-400'>
                                    <div className="">
                                        <h1>employee</h1>
                                    </div>
                                </div>
                                <div className="shadow-xl  rounded-xl  ml-15 h-96 p-10 m-10 bg-slate-400  ">
                                    <h1>start/end time</h1>
                                    <div className="flex">
                                        <div className="flex-col ">
                                            <input className="rounded-xl p-5 m-4 " placeholder="start"></input>
                                            <input className="rounded-xl p-5 m-4 " placeholder=""></input>
                                        </div>
                                        <div className="flex-col ">
                                            <input className="rounded-xl p-5 m-4 " placeholder="end"></input>
                                            <input className="rounded-xl p-5 m-4 " placeholder="comment"></input>
                                        </div>
                                    </div>
                                    <button className="bg-white p-4 m-4 hover:bg-blue-950 ml-64 rounded-xl">Start/end</button>
                                </div>

                                <div className="shadow-xl  rounded-xl  ml-15 h-96 p-10 m-10 bg-slate-400">
                                    <h1>All task</h1>
                                    {/* <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col mt-5'>
                        <div className='calenderdiv'>
                            <Calendar onChange={setDate} value={date} />
                        </div>
                        <div className="flex flex-col mt-8">
                            <Emplogs />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Employee;