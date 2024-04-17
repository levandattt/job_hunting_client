import {useState, useEffect} from 'react';

const Header = ({children, className, disabled}) => {
    const [state, setState] = useState({
        message: '',
        messages: []
    });

    return (
        <div className={` select-none `}>
        </div>
    )
  };
  
  export default Header;
  