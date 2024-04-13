import { useAuth } from "../provider/authProvider";
import { useNavigate,Link } from "react-router-dom";
import { login } from "../services/authService";
import {useState} from "react";
import { toast } from 'react-toastify';

const Login =  () => {
  const { setAccessToken, setRefreshToken } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleRegister = async(event) => {
    // post request to register
    // if success, redirect to login page
    // if error, show error message
    event.preventDefault();
    
    const response = await login(formData);
    console.log(response)
    //not connected to the server
    if (response === undefined) {
      toast.error(`Server is not available, please try again later`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }      
    if (response.status === 200) {
      setAccessToken(response.data.data.token.accessToken);
      setRefreshToken(response.data.data.token.refreshToken);
      // set user data to local storage
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
      navigate("/", { replace: true });
      toast.success(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }else{
      toast.error(`${response.data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return(
    <>
    <div className={`flex flex-col justify-center items-center w-full`}>
      <h1 className={`flex text-lg`}>Login</h1>
      <p  className={`flex text-sm mb-2`}>Please enter your e-mail or username and password:</p>
      <div className={`flex justify-center items-center w-1/3 my-2`}>
        <form onSubmit={handleRegister} className={`flex flex-col justify-center items-center w-full`} >
            <div className={`mb-2 text-sm w-full`}>
              <input title="email or username" value={formData.account} onChange={handleChange} type="text" name="account" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="password" value={formData.password} onChange={handleChange} type="password" name="password" />
            </div>
            <button value="Login" /> 
          </form>
      </div>
      <p className={`text-gray-500 text-sm`}>Don't have an account? <Link className={`no-underline text-gray-900 hover:text-gray-500`} to="/register">Create one</Link></p>
    </div>
    </>
  );
};

export default Login;
