import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calender.css";
import emp from '../assets/img/emp.png';
import Emplogs from './Emplogs';
import "./Employee.css"


const Employee = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="Emp ">
                <div className=" ml-5 flex mt-8 h-36 align-center justify-evenly  ">
                    <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
                    <div className=" bg-slate-400 w-56 p-20 m-5 rounded-lg"></div>
                </div>
                <div className='flex  boxwithcalender mt-24'>
                    <div className="shadow-xl  rounded-xl w-[50rem]  h-[20rem] p-10 m-10  bg-slate-400">
                        <h1>employee</h1>
                    </div>
                    <div className=' calenderdiv pr-10 pt-10'>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </div>

            </div>
            <div className='flex '>
                <div>
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



                    <div className="flex items-center flex-col  shadow-xl rounded-xl ml-10 h-96 p-4 m-10 bg-slate-400" id='sectionAllTask'>
                        <div className='flex justify-between p-4 w-[40rem]' >
                            <div>All task</div>
                            <div className='textALLview'>view all &rarr;</div>
                        </div>

                        <div className="bg-white w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                    </div>

                </div>
                <div className='flex  justify-center'id='sectionEmpLogs'>
                    <div className="flex flex-col items-center mt-8 mr-4 mb-4">
                        <Emplogs />
                    </div>


                </div>
            </div>
        </>
    )
}
export default Employee;