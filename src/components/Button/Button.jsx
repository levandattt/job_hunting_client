import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Button = ({children, onClick, className, disabled}) => {
    return (
      <button className={`flex justify-center items-center transition-all ease-in w-full  border-1  p-2  rounded-3xl border-violet-300 focus:border-violet-600 focus:outline-none focus:border-b-2 ${disabled?'bg-violet-300 text-slate-500 cursor-not-allowed':'bg-violet-500 hover:bg-violet-700'}  ${className}`} onClick={onClick} disabled={disabled}>{children}</button>
    )
  };
  
  export default Button;
  