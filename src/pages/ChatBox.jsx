import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const ChatBox = ({children, onClick, className, disabled}) => {
    const [state, setState] = useState({
        message: '',
        messages: []
    });

    return (
        <div className={`w-full h-full px-10 flex items-center justify-center`}>
            <div className={`flex flex-col justify-center items-center select-none `}>
                <span className={`bg-white p-3 rounded-full text-lg font-bold mb-3`}>Job Hunting</span>
                <h1 className={'font-bold'}>Good day! How may I assist you today?</h1>
            </div>
        </div>
    )
  };
  
  export default ChatBox;
  