import emp from '../assets/img/emp.png';

const Emplogs=()=>{
return(
    <>
      <h1 className=' text-center font-semibold text-lg  p-2'>Employee Activity Logs</h1>
                        <div className=' flex h-22 w-52 border-b-4 border-white p-3 mr-3'>
                            <div>
                            <img src={emp} alt='emp' className='rounded-full h-16 w-18'></img>
                            <h1 >lorem</h1>
                            </div>
                          
                            <div className="">
                                <h1 className='m-2'>Start time</h1>
                                <h1 className='m-2'>End Time</h1>
                            </div>
                        </div>
                        <div className=' flex h-22 w-52 border-b-4 border-white p-3 mr-3'>
                            <div>
                            <img src={emp} alt='emp'className='rounded-full h-16 w-18'></img>
                            <h1 >lorem</h1>
                            </div>
                          
                            <div className="">
                                <h1 className='m-2'>Start time</h1>
                                <h1 className='m-2'>End Time</h1>
                            </div>
                        </div>
                        <div className=' flex h-22 w-52 border-b-4 border-white p-3 mr-3'>
                            <div>
                            <img src={emp} alt='emp'className='rounded-full h-16 w-18'></img>
                            <h1 >lorem</h1>
                            </div>
                          
                            <div className="">
                                <h1 className='m-2'>Start time</h1>
                                <h1 className='m-2'>End Time</h1>
                            </div>
                        </div>
                        <div className=' flex h-22 w-52 border-b-4 border-white p-3 mr-3'>
                            <div>
                            <img src={emp} alt ='emp'className='rounded-full h-16 w-18'></img>
                            <h1 >lorem</h1>
                            </div>
                          
                            <div className="">
                                <h1 className='m-2'>Start time</h1>
                                <h1 className='m-2'>End Time</h1>
                            </div>
                        </div>
                        <div className=' flex h-22 w-52 border-b-4 border-white p-3 mr-3'>
                            <div>
                            <img src={emp} alt='emp'className='rounded-full h-16 w-18'></img>
                            <h1 >lorem</h1>
                            </div>
                          
                            <div className="">
                                <h1 className='m-2'>Start time</h1>
                                <h1 className='m-2'>End Time</h1>
                            </div>
                        </div>{/*Add many more acc to data by simply iterating over data. This is just for layout purpose*/}
                      
    </>
)
}
export default Emplogs;