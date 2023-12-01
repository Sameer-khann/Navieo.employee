import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const LoginLeft=()=>{
    return(
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
    )
}
export default LoginLeft;