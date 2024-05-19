import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { fetchEventSource } from "@microsoft/fetch-event-source";
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

  const onSubmit = async (message) => {
    try {
      setInputValue("");

      await setConversation((prevMessages) => [
        ...prevMessages,
        { from: "user", content: message },
      ]);

      let checkID = false;
      let _id = id;
      if (!_id) {
        checkID = false;
        const response = await getNewConversation();
        _id = response?.data?.id;
        console.log("HHJAHDKJAHSJDKH  ");
      } else {
        checkID = true;
      }
      fetchMessage3(message, _id);
      if (!checkID) {
        navigate(`/chat/${_id}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  const fetchMessage3 = async (message, idx) => {
    setStopStream(false);
    const ctrl = new AbortController();
    await fetchEventSource(
      `${process.env.REACT_APP_API_BASE}${
        process.env.REACT_APP_API_NEW_REQUEST
      }/${idx ? idx : id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client side error ", res);
          }
        },
        onmessage(event) {
          console.log("dataeven: ", event.data);
          const parsedData = JSON.parse(event.data);
          if (parsedData.type === "status") {
          } else if (parsedData.type === "stream") {
            console.log(parsedData);
            setNewConversation((prevMessages) => [
              ...prevMessages,
              parsedData.token,
            ]);
          } else if (parsedData.type === "id") {
            setNewConversationId(parsedData.id);
          } else if (parsedData.type === "finalAnswer") {
            setStopStream(true);
          }
        },
        onclose() {
          setStopStream(true);
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      }
    );
  };
  const fetchMessage = async (message, idx) => {
    try {
      await setConversation((prevMessages) => [
        ...prevMessages,
        { from: "user", content: message },
      ]);

      const eventSource = new EventSource(
        `${process.env.REACT_APP_API_BASE}${
          process.env.REACT_APP_API_NEW_REQUEST
        }/${idx ? idx : id}`
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
  const fetchMessage2 = async (message, idx) => {
    try {
      // Cập nhật cuộc trò chuyện với tin nhắn của người dùng
      await setConversation((prevMessages) => [
        ...prevMessages,
        { from: "user", content: message },
      ]);

      // Thiết lập nội dung cần gửi kèm
      const payload = {
        message,
      };

      // Gửi yêu cầu POST
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE}${
          process.env.REACT_APP_API_NEW_REQUEST
        }/${idx ? idx : id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      setStopStream(false);

      while (true) {
        const { value, done } = await reader.read();

        if (done) {
          break;
        }

        const data = decoder.decode(value, { stream: true });
        console.log("datahihi: ", data);
        // const parsedData = JSON.parse(data);

        // if (parsedData.type === "status") {
        //   // Xử lý trạng thái nếu cần
        // } else if (parsedData.type === "stream") {
        //   console.log(parsedData);
        //   await setNewConversation((prevMessages) => [
        //     ...prevMessages,
        //     parsedData.token,
        //   ]);
        // } else if (parsedData.type === "id") {
        //   await setNewConversationId(parsedData.id);
        // } else if (parsedData.type === "finalAnswer") {
        //   setStopStream(true);
        //   break; // Dừng đọc stream khi nhận được finalAnswer
        // }
      }
      return () => {
        reader.cancel();
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
                  onSubmit={onSubmit}
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
