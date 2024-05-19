import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  getHistories,
  getConversation,
  getNewConversation,
} from "../../api/conversation";
import ChatBox from "../ChatBox";
import Header from "./components/Header";
import { RiLoader2Line } from "react-icons/ri";
import ChatInputBox from "./components/InputChatBox";
import SideBar from "./components/Sidebar";
import { useParams } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [histories, setHistories] = useState({});
  const [conversation, setConversation] = useState([]);
  const [newConversation, setNewConversation] = useState([" hihihih"]);
  const [newConversationTitle, setNewConversationTitle] = useState("");
  const [stopStream, setStopStream] = useState(true);
  const [newConversationId, setNewConversationId] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { id } = useParams();
  const chatBoxRef = useRef(null);
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [conversation, newConversation, chatLoading]);

  const fetchData = async (limit = 10, offset = 0) => {
    try {
      const response = await getHistories(limit, offset);
      await setHistories(response?.data?.histories);
    } catch (error) {
      console.error("Error fetching histories:", error);
    }
  };
  const fetchConversation = async (id) => {
    try {
      setChatLoading(true);
      const response = await getConversation(id);
      setChatLoading(false);
      await setConversation(response?.data?.messages);
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  const fetchMessage = async (message) => {
    try {
      await setConversation((prevMessages) => [
        ...prevMessages,
        { from: "user", content: message },
      ]);

      const url = `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_NEW_REQUEST}/${id}`;
      console.log(url);
      const eventSource = new EventSource(
        `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_NEW_REQUEST}/${id}`
      );
      setStopStream(false);
      eventSource.onmessage = async (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "status") {
        } else if (data.type === "stream") {
          console.log(data);
          await setNewConversation((prevMessages) => [
            ...prevMessages,
            data.token,
          ]);
        } else if (data.type === "id") {
          await setNewConversationId(data.id);
        } else if (data.type === "finalAnswer") {
          setStopStream(true);
          eventSource.close(); // Đóng stream khi nhận được finalAnswer
        }
      };

      eventSource.onerror = (error) => {
        console.error("EventSource failed:", error);
        setStopStream(true);
        eventSource.close();
      };

      return () => {
        eventSource.close();
      };
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  useEffect(() => {
    if (stopStream && newConversation?.length > 0) {
      const conversationString = newConversation?.join("");
      const newItems = {
        id: newConversationId,
        from: "assistant",
        content: conversationString,
      };
      setConversation((prevMessages) => [...prevMessages, newItems]);
      setNewConversation([]);
    }
  }, [stopStream]);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    if (id) {
      fetchConversation(id);
    } else {
      setConversation([]);
    }
  }, [id]); // Empty dependency array to run only once when the component mounts

  const onNewConversation = async () => {
    try {
      setChatLoading(true);
      const response = await getNewConversation();
      console.log(response);
      navigate(`/chat/${response?.data?.id}`);
      setChatLoading(false);
    } catch (error) {
      console.error("Error fetching new conversation:", error);
    }
  };
  return (
    <div className={"relative overflow-hidden"}>
      <div className={"absolute h-full w-full z-1"}>
        <div className={"flex md:px-3 md:py-3 h-full w-full relative"}>
          <SideBar
            className={``}
            data={histories}
            onNewConversation={onNewConversation}
          />
          {/* Chat box section */}
          <div className={"relative flex flex-col w-full relative "}>
            {/* Header */}
            <div>
              <Header />
            </div>
            {/*Chat box  */}
            <div
              ref={chatBoxRef}
              className={`relative w-full h-full overflow-y-scroll scroll-auto`}
            >
              <div className={`absolute right-0 left-0 top-0 bottom-0`}>
                <div className={`px-40 h-full w-full`}>
                  {chatLoading ? (
                    <div className={"flex justify-center items-center h-full"}>
                      <div
                        className={
                          "w-full h-full flex justify-center items-center"
                        }
                      >
                        <span
                          className={
                            "animate-spin h-5 w-5 mr-3 text-slate-500 text-xl"
                          }
                        >
                          <RiLoader2Line />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <ChatBox
                      data={conversation}
                      newConversation={newConversation}
                      loading={chatLoading}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* chat box input  */}
            <div className={"absolute bottom-0 flex justify-center w-full"}>
              <div
                className={`min-[0px]:max-lg:w-5/6 w-1/2 mb-5 drop-shadow-[0_10px_15px_rgba(27,34,125,0.2)]`}
              >
                <ChatInputBox
                  placeholder={`What’s in your mind?...`}
                  icon={"🧠"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onSubmit={fetchMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*background  */}
      <div>
        <div className="w-full backdrop-blur-xl bg-white/30 backdrop-brightness-95 absolute h-lvh"></div>
        <img
          src="/img/home_img_fill_rawraw.png"
          alt="logo"
          className="opacity-35 h-lvh w-lvw"
        />
      </div>
    </div>
  );
};

export default HomePage;
