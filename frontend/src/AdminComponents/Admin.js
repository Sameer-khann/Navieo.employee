import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import "./Admin.css"
import FlexBox from '../components/FlexBox';
import Adminlog from './Adminlog';
import AdminFlexBox from './AdminFlexBox';


const Admin = () => {

    const [date, setDate] = useState(new Date());

    return (
        <>
            <div className="Emp">
                <AdminFlexBox />
                <div className='flex  boxwithcalender mt-24'>
                    <div className="shadow-xl text-black  rounded-xl w-[50rem]  h-[20rem] p-10 m-10  AdminBox">
                        <h1>Admin</h1>
                    </div>
                    <div className=' calenderdiv pr-10 pt-10'>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </div>

            </div>
            <div className='flex '>
                <div>
                    <div className="shadow-xl  text-black rounded-xl  ml-15 h-96 p-10 m-10 AdminBox">
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

                        <button className="bg-blue-900 p-4 m-4 hover:bg-blue-950 ml-64 rounded-xl text-white">Start/end</button>
                    </div>



                    <div className="flex text-black items-center flex-col shadow-xl rounded-xl ml-10 h-96 p-4 m-10 AdminBox" id='AdminSectionAllTask'>
                        <div className='flex justify-between p-4 w-[40rem]'>
                            <div>All task Admin</div>
                            <Link to="/AdminAllTasks">
                                <div className='AdmintextALLview'>view all &rarr;</div>
                            </Link>
                        </div>

                        <div className="inputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                        <div className="inputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                        <div className="inputBox w-[40rem] h-14 rounded-xl p-4 m-2"></div>
                    </div>


                </div>
                <div className='flex  justify-center' id='AdminsectionEmpLogs'>
                    <div className="flex flex-col items-center mt-8 mr-4 mb-4">
                        <Adminlog />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Admin;