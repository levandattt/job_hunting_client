import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Input = ({title, isTitleShow=true, placeholder, value, onChange, type, onKeyStop, name, onKeyDown, required, className, error}) => {
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
      console.log("error",error)
        if(error){
          setIsError(true)
        }else{
          setIsError(false);
        }
    },[error]);

    const handleOnChange = (e) =>{
        onChange(e);
    }

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        // Thực hiện hành động của bạn ở đây, ví dụ: gọi hàm tìm kiếm
        if(typeof onKeyStop === "function"){onKeyStop(value)}
      }, 300); // Thời gian chờ trước khi thực hiện hành động, có thể điều chỉnh
  
      return () => clearTimeout(delayDebounceFn);
    }, [value]);

    return (
      <div className={`flex flex-col w-full ${className}`}>
          <div className={`flex justify-between`}>
            <label className={`transition-colors ease-in text-sm mb-1  ${value===""&&!isTitleShow?'text-transparent':isError?'text-red-400':'text-slate-600'}`}>{title}{required?<sup className={`${value===""&&!isTitleShow?'text-transparent':`text-red-700`}`}>*</sup>:<></>}</label>
            <span className={`flex items-center transition-all ease-in text-sm mb-1 px-1 ${isError?`text-red-400 underline`:`hidden`}`}><span className={`px-1`}><MdErrorOutline/></span>{error}</span>
          </div>
          <div className={`flex w-full`}>
              <input className={`transition-all ease-in text-sm font-light text-slate-500 w-full border-1 rounded-lg ${isError?`text-red-400 border-red-400 focus:border-red-400`:`border-slate-300 focus:border-slate-600`}  p-2 focus:outline-none  focus:border-b-2`} value={value} onChange={handleOnChange} onKeyDown={onKeyDown} type={type} name={name} placeholder={`${placeholder}`}  required={required?true:false}/>
          </div>
      </div>
    )
    
  };
  
  export default Input;
  