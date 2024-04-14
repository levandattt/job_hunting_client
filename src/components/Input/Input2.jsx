import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Input2 = ({icon, iconOnly, placeholder, value, onChange, type, onKeyStop, name, onKeyDown, required, className, onClick}) => {
    return (
        <button  className={` ${iconOnly?'flex-none':'flex-auto'} bg-violet-500 hover:bg-violet-700 ${className} `}  onClick={()=>onClick(iconOnly)}>
            <div className={`flex p-2 ${iconOnly?'':''} justify-center items-center `}>
                <div className={'flex items-center text-sm justify-center'}>
                    <div className={`text-lg ${!iconOnly?'pr-2':''}`} >{icon}</div>
                    <input className={`${iconOnly?'hidden':''} font-light placeholder-violet-50 bg-transparent w-full focus:outline-none`} value={value}  onKeyDown={onKeyDown} type={type} name={name} placeholder={`${placeholder}`}  required={required?true:false}/>
                </div>
            </div>
        </button>
    )
  };
  
  export default Input2;
  