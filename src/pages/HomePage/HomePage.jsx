import {useState, useEffect} from 'react';
import { getHistories } from "../../api/conversation";
import ChatBox from "../ChatBox";
import Header from "./components/Header";
import ChatInputBox from "./components/InputChatBox";
import SideBar from "./components/Sidebar";
const HomePage = () => {
  const [histories, setHistories] = useState({});
  
  const fetchData = async (limit = 10, offset = 0) => {
    try {
      const data = await getHistories(limit, offset);
      await setHistories(data);
    } catch (error) {
      console.error('Error fetching histories:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  return(
    <div className={'relative'}>
        <div className={'absolute h-full w-full z-1'}>
          <div className={'flex md:px-3 md:py-3 h-full w-full relative'}>
            <SideBar data={histories} className={``}/>

            {/* Chat box section */}
            <div className={'flex flex-col w-full h-full relative'}>

              {/* Header */}
              <Header/> 

              {/*Chat box  */}
              <ChatBox/>

              {/* chat box input  */}
              <div className={'absolute bottom-0 flex justify-center w-full'}>
                <div className={`w-1/2 mb-5 drop-shadow-[0_10px_15px_rgba(27,34,125,0.2)]`}>
                  <ChatInputBox placeholder={`What’s in your mind?...`} icon={'🧠'}/>
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
