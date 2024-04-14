import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Button2 = ({children,icon,onClick, iconOnly, className, disabled}) => {
    return (
        
        // <button className={`flex ${iconOnly?'aspect-square':''}   border-1  p-2  rounded-3xl border-violet-300 focus:border-violet-600 focus:outline-none focus:border-b-2 ${disabled?'bg-violet-300 text-slate-500 cursor-not-allowed':'bg-violet-500 hover:bg-violet-700'}  ${className}`} onClick={onClick} disabled={disabled}>
            <button className={`${className}  ${iconOnly?'flex-none':'flex-auto'}  bg-violet-500 hover:bg-violet-700`} onClick={()=>onClick(iconOnly)}>
                <div className={`flex p-2 ${iconOnly?'':''}  justify-center items-center `}>
                    <div className={'flex items-center text-sm justify-center'}>
                        <span className={`text-lg ${!iconOnly?'':''}`}>{icon}</span>
                        <span className={iconOnly?'hidden':'text-xs'}>{children}</span>
                    </div>
                </div>
            </button>
    )
};

export default Button2;
  