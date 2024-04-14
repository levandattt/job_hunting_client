import { useNavigate, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import Button2  from "../components/Button/Button2";
import Button3  from "../components/Button/Button3";
import Input2  from "../components/Input/Input2";
import { FiPlus } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import  SidebarItem  from "../components/Item/SidebarItem";
import { TbMessage2 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";


const HomePage = () => {
  const [isSidebarBtnClose, setIsSidebarBtnClose] = useState(true);

  const onSearchBtnClick = (value) => {
    if(value) {
      setIsSidebarBtnClose(!isSidebarBtnClose);
    }
  }

  const onNewChatBtnClick = (value) => {
    console.log(value);
    if(value){
      setIsSidebarBtnClose(!isSidebarBtnClose);
    } 
  }

  return(
    <div classnName={'relative'}>
        <div className={'absolute w-150 h-full z-1'}>
          <div className={'px-3 py-3 h-full'}>
            <div className={'flex flex-col items-center bg-white/50 h-full rounded-3xl px-3 py-4 relative'}>
              <h4 className={'font-bold mb-4'}>Job hunting</h4>
              <div className={'flex w-full'}>
                <Button2 className={'text-white mr-3 p-2 rounded-full bg-violet-300'} icon={<FiPlus/>} onClick={onNewChatBtnClick} iconOnly={isSidebarBtnClose}>New Chat</Button2>
                <Input2 className={'text-white p-2 rounded-full bg-violet-900 '} icon={<IoSearch/>} onClick={onSearchBtnClick} iconOnly={!isSidebarBtnClose} placeholder={'Search conversation...'}/>
              </div>
              <div className="w-full h-0.5 my-3 bg-violet-100"/>
              <div className={'w-full flex justify-between p-2'}>
                <span className={'text-sm text-slate-500'}>Your conversations</span>
                <button className={'text-sm font-bold text-violet-500 hover:text-violet-700 hover:underline hover:decoration-solid transition-all easy-in-out'}>clear all</button>
              </div>
              <div className="w-full h-0.5 my-3 bg-violet-100"/>
              <div className={`overflow-y-auto`}>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Senior C++ Skills: Summary</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>C# Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Senior Java Skills: Comprehensive Requirements</SidebarItem>
                <div className="w-full h-0.5 my-3 bg-violet-100"/>
                <div className={'w-full flex justify-between p-2'}>
                  <span className={'text-sm text-slate-500'}>Last 7 days</span>
                </div>
                <div className="w-full h-0.5 my-3 bg-violet-100"/>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Senior C# Developer Skills</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>

                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
                <SidebarItem icon={<TbMessage2/>}>Java Dev Skills: Essential Requirements</SidebarItem>
              </div>

              <div className={'relative flex flex-col-reverse w-full px-3 pt-4 '}>
                <Button3 icon={<img src="/img/avatar.png" alt="logo" className="h-full w-auto rounded-full"/>}>Lê Văn Đạt</Button3>
                <Button3 icon={<IoSettingsOutline/>} className={`mb-3`}>Settings</Button3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full backdrop-blur-xl bg-white/30 backdrop-brightness-95 absolute h-lvh"></div>
          <img src="/img/home_img_fill_rawraw.png" alt="logo" className="opacity-35 h-lvh w-lvw"/>
        </div>
    </div>
  ) 
};

export default HomePage;
