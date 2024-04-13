import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import {useState} from "react";
import { toast } from 'react-toastify';
const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    full_name: "",
    dob: "",
    ph_no: "",
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
    
    const response = await register(formData);
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
      navigate("/login", { replace: true });
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
      <h1 className={`flex text-lg`}>Register Page</h1>
      <p  className={`flex text-sm mb-2`}>Please fill in the information below:</p>
      <div className={`flex justify-center items-center w-1/3 my-2`}>
        <form onSubmit={handleRegister} className={`flex flex-col justify-center items-center w-full`} >
            <div className={`mb-2 text-sm w-full`}>
              <input title="username" value={formData.username} onChange={handleChange} type="text" name="username" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="email" value={formData.email} onChange={handleChange} type="text" name="email" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="password" value={formData.password} onChange={handleChange} type="password" name="password" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="full name" value={formData.full_name} onChange={handleChange} type="text" name="full_name" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="date of birth" value={formData.dob} onChange={handleChange} type="text" name="dob" />
            </div>
            <div className={`mb-2 text-sm w-full`}>
              <input title="phone number" value={formData.ph_no} onChange={handleChange} type="text" name="ph_no" />
            </div>
            <button value="Create my account" /> 
          </form>
      </div>
    </div>
    </>
  );
};

export default Register;
