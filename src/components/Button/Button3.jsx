import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Button3 = ({children,icon,onClick, iconOnly, className, disabled}) => {
    return (
      <button
        className={`${className} ${
          iconOnly ? "flex-none" : "flex-auto"
        } p-2 w-full border border-1 rounded-full border-slate-100`}
        onClick={() => onClick(iconOnly)}
      >
        <div className={`flex justify-center     ${iconOnly ? "" : ""} `}>
          <div className={"flex text-lg items-center"}>
            <span
              className={`text-lg w-10 h-10 flex justify-center items-center ${
                !iconOnly ? "" : ""
              } rounded-full  mr-1`}
            >
              {icon}
            </span>
            <span
              className={iconOnly ? "hidden" : "text-sm flex justify-center"}
            >
              {children}
            </span>
          </div>
        </div>
      </button>
    );
};

export default Button3;
  