import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    
      <div className="flex  flex-col md:flex-row ">
      {/* left section*/}
      <div className="md:w-1/3  ">
        <div className=" md:mt-40 mt-10 md:ml-24 md:w-80">
          <h1 className="font-bold  p-4 m-2 text-4xl">Welcome Back!</h1>
          <h1 className="overflow-hidden break-words p-3 m-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s</h1>
          
          
          <button className="bg-gray-300 hover:bg-white rounded m-2  p-2 font-bold  mt-2 md:mt-0  md:ml-12 w-48 ">
          <FaGoogle className="inline m-2"/>Login with Google</button>
            <button className="bg-gray-300 hover:bg-white rounded m-2 p-1 font-bold mt-2 md:ml-12  md:mt-0 w-48 h-12"><FaFacebook className="inline m-1"/>Login with Facebook</button>
            </div>
        
      </div>
      {/*right section */}
      <div className="md:w-2/3   h-screen bg-hero-pattern " >
      
      <div className="shadow md:ml-64 rounded-2xl  mt-10 md:mt-40 bg-white h-[32rem] w-[34rem] bg-opacity-50 ">

       <h1 className="font-bold p-4 m-4 ml-40 mt-8">Please Enter your details</h1>
       <h1 className="ml-16 font-semibold">Enter email address</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-16 font-semibold">Password</h1>
       <input className="p-4 m-2 ml-16 rounded-3xl w-96"></input>
       <h1 className="ml-80 font-bold cursor-pointer hover:text-slate-200">Forget Password?</h1>
       <button className="ml-16 bg-blue-950 w-96 rounded-3xl p-4 m-2 text-white">Login</button>
       <h1 className="ml-16 font-bold p-4 cursor-pointer hover:text-slate-200">Don't have an account? Register</h1>{/* make register clickable*/}
      </div>
        </div>
        
    </div>
  );
};
export default Login;
