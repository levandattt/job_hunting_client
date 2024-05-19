import {useState, useEffect} from 'react';

const Header = ({children, className, disabled}) => {
    const [state, setState] = useState({
        message: '',
        messages: []
    });

    return (
      <div className={` select-none  w-full `}>
        <div className={`py-3`}>Model 3.4</div>
      </div>
    );
  };
  
  export default Header;
  