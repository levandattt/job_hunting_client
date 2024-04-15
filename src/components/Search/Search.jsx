import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";
import { BiSend } from "react-icons/bi";

const Search = ({icon, iconOnly, placeholder, value, onChange, type, onKeyStop, name, onKeyDown, required, className, onClick}) => {
    return (
        <div  className={`w-full ${iconOnly?'flex-none':'flex-auto'} bg-white rounded-full ${className}`}>
            <div className={`flex  ${iconOnly?'':''} justify-center items-center w-full`}>
                    <div className={`flex justify-center items-center text-lg ${!iconOnly?' m-2 p-4 rounded-full aspect-ratio-square':''}`} ><span className={`text-2xl absolute drop-shadow-[0_9px_6px_rgba(221,15,15,0.40)]`}>{icon}</span></div>
                    <input className={`${iconOnly?'hidden':''} placeholder-animate font-light placeholder-slate-500 bg-transparent w-full focus:outline-none`} value={value}  onKeyDown={onKeyDown} type={type} name={name} placeholder={`${placeholder}`}  required={required?true:false}/>
                    <button className={`flex justify-center items-center bg-violet-500 text-lg text-white p-4 m-2 rounded-full`}><span className={`absolute`}><BiSend/></span></button>
            </div>
        </div>
    )
  };
  
  export default Search;
  