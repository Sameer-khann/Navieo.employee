import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from '../assets/img/logo.jpeg';
const LoginLeft=()=>{
    return(
        <div className="md:w-1/3  ">
         <img className="h-28 w-64  mt-24 ml-28" src={logo} alt='logo'></img>
        <div className=" md:mt-0 md:ml-24 md:w-80">
           
          <h1 className="font-bold  p-4 m-2 text-4xl">Welcome Back!</h1>
          <h1 className="overflow-hidden break-words p-3 m-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s</h1>
          
          
         
            </div>
      </div>
    )
}
export default LoginLeft;