import LoginForm from "./LoginForm";
import LoginLeft from "./LoginLeft";
const Login = () => {
  return (
    
      <div className="flex  flex-col md:flex-row ">
      {/* left section*/}
      <LoginLeft/>
      {/*right section */}      
        <LoginForm/>
    </div>
  );
};
export default Login;
