import {useState, useEffect} from 'react';
import { MdErrorOutline } from "react-icons/md";

const Header = ({children, className, disabled}) => {
    const [state, setState] = useState({
        message: '',
        messages: []
    });

    return (
        <div className={` select-none `}>
            Header
        </div>
    )
  };
  
  export default Header;
  