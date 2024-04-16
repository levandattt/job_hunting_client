import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react';

import ChatBox from "./ChatBox";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import SideBar from "../components/Sidebar/Sidebar";
const HomePage = () => {



  return(
    <div classnName={'relative'}>
        <div className={'absolute h-full w-full z-1'}>
          <div className={'flex px-3 py-3 h-full w-full'}>
            <SideBar/>

            {/* Chat box section */}
            <div className={'flex flex-col w-full relative'}>

              {/* Header */}
              <Header/> 

              {/*Chat box  */}
              <ChatBox/>

              {/* chat box input  */}
              <div className={'absolute bottom-0 flex justify-center w-full'}>
                <div className={`w-1/2 mb-5 drop-shadow-[0_10px_15px_rgba(27,34,125,0.2)]`}>
                  <Search placeholder={`What’s in your mind?...`} icon={'🧠'}/>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/*background  */}
        <div>
          <div className="w-full backdrop-blur-xl bg-white/30 backdrop-brightness-95 absolute h-lvh"></div>
          <img src="/img/home_img_fill_rawraw.png" alt="logo" className="opacity-35 h-lvh w-lvw"/>
        </div>
    </div>
  ) 
};

export default HomePage;
