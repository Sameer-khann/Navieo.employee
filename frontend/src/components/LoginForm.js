const LoginForm=()=>{
    return(
        <>
        <div className="md:w-2/3   h-screen bg-background " >
      
      <div className="shadow md:ml-64 rounded-2xl  mt-10 md:mt-40 bg-white h-[32rem] w-[34rem] bg-opacity-50 ">

       <h1 className="font-bold p-4 m-4 ml-40 mt-8">Please Enter your details</h1>
       <h1 className="ml-16 mt-10 font-semibold">Enter email address</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-16 mt-5 font-semibold">Password</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-80 p-4 font-bold cursor-pointer hover:text-slate-200">Forget Password?</h1>
       <button className="ml-16 bg-blue-950 w-96 rounded-3xl p-4 m-2 text-white">Login</button>
       
      </div>
        </div>
        </>
    )
}
export default LoginForm;