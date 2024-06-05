import { useState, useEffect } from "react";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { ImArrowDownRight2 } from "react-icons/im";
import { TbCircleArrowDownRight } from "react-icons/tb";
import { MdOutlineCopyAll } from "react-icons/md";
import { convert } from "html-to-text";
const convertToHTML = (text) => {
  // Convert **text** to <h2>text</h2>
  text = text?.replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>");
  // text = text
  //   .replace(
  //     /<unk> a href='([^']+)'>([^<]+)<unk> \/a>/,
  //     " <a href='$1' target='_black'>$2</a> "
  //   )
  //   .trim();
  ("<pad> You can find more information about java posting example at <unk> a href='http://www.indeed.com/job/java-posting-a73db85946b595c6'>java posting, like a java posting,'>java posting, <unk> a href='https://ea-etg.fa.ocs.<unk> /a>.</s>");
  text = text?.replaceAll("<unk> a", "<a target='_blank' ");
  text = text?.replaceAll("<unk> /a>", "</a>");
  text = text?.replaceAll("<unk> /ul>", "</ul>");
  text = text?.replaceAll("<unk> /li>", "</li>");
  text = text?.replaceAll("<unk> ul>", "<ul>");
  text = text?.replaceAll("<unk> li>", "<li>- ");
  text = text?.replaceAll("<unk> strong>", "<strong>");
  text = text?.replaceAll("<unk> /strong>", "</strong>");
  // Convert ```code``` to <pre><code>code</code></pre>
  text = text?.replace(
    /```([\s\S]*?)```/g,
    "<pre class='my-3 backdrop-blur-xl bg-slate/10 backdrop-brightness-95 text-late-700 p-4 rounded-xl'><code>$1</code></pre>"
  );

  text = text?.replace(/\n/g, "<br>");

  return text;
};

const ChatBox = ({
  children,
  onClick,
  className,
  data,
  newConversation,
  loading,
  disabled,
}) => {
  const [messages, setMessages] = useState([]);
  const [newConversationState, setNewConversationState] = useState([]);
  const [status, setStatus] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");
  useEffect(() => {
    setMessages(data);
  }, [data]);

  useEffect(() => {
    setNewConversationState(newConversation);
  }, [newConversation]);
  // useEffect(() => {
  //   setMessages([]);
  // const eventSource = new EventSource("http://127.0.0.1:6970/api/v1/conv"); // Thay đổi URL nếu cần

  // eventSource.onmessage = (event) => {
  //   const data = JSON.parse(event.data);
  //   if (data.type === "status") {
  //     setStatus(data.status || data.message || "");
  //   } else if (data.type === "stream") {
  //     setMessages((prevMessages) => [...prevMessages, data.token]);
  //   } else if (data.type === "finalAnswer") {
  //     setFinalAnswer(data.text);
  //     eventSource.close(); // Đóng stream khi nhận được finalAnswer
  //   }
  // };

  // eventSource.onerror = (error) => {
  //   console.error("EventSource failed:", error);
  //   eventSource.close();
  // };

  // return () => {
  //   eventSource.close();
  // };
  // }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const convertToText = (text) => {
    return convert(text);
  };

  const handleCopy = (text) => {
    const textToCopy = convertToText(text);
    copyToClipboard(textToCopy);
  };

  const renderUserMessage = (message) => {
    return (
      <div className=" flex items-center">
        <div className={`w-9 h-9`}>
          <img
            src="/img/avatar.png"
            alt="logo"
            className="border-4 border-white-700 h-full w-full object-cover object-center rounded-full"
          />
        </div>
        <div className="text-base font-semibold text-indigo-950 p-2 rounded-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: convertToHTML(message.content),
            }}
          ></div>
        </div>
      </div>
    );
  };

  const renderAssistantMessage = (message) => {
    return (
      <>
        <div className="px-11">
          <div className={`flex  items-center justify-between`}>
            <div className={`text-base font-semibold text-indigo-900`}>
              <div className={`flex items-center`}>
                <span className={"my-2 mr-1"}>Job hunting</span>
                {/* <span className={` border-2 border-indigo-900 p-1 rounded-full`}>
              <ImArrowDownRight2 className={`font-semibol text-xs`} />
            </span> */}
                {/* <BsArrowDownRightCircle /> */}
                <TbCircleArrowDownRight />
              </div>
            </div>
            <button
              onClick={() => handleCopy(message?.content)}
              className={`text-indigo-900`}
            >
              <MdOutlineCopyAll />
            </button>
          </div>
          <div className="text-base font-normal text-slate-600 rounded-lg">
            <div
              dangerouslySetInnerHTML={{
                __html: convertToHTML(message?.content),
              }}
            ></div>
          </div>
        </div>
        <div className={`my-4 border-b-2`}></div>
      </>
    );
  };

  const renderNewConversation = (message) => {
    return (
      <div className="px-11">
        <div className={`text-base font-semibold text-indigo-900`}>
          <div className={`flex items-center`}>
            <span className={"my-2 mr-1"}>Job hunting</span>
            {/* <span className={` border-2 border-indigo-900 p-1 rounded-full`}>
              <ImArrowDownRight2 className={`font-semibol text-xs`} />
            </span> */}
            {/* <BsArrowDownRightCircle /> */}
            <TbCircleArrowDownRight />
          </div>
        </div>
        <div className="text-base font-normal text-slate-600 rounded-lg">
          <div
            dangerouslySetInnerHTML={{
              __html: convertToHTML(message?.content),
            }}
          ></div>
        </div>
      </div>
    );
  };
  return (
    <>
      {messages?.length > 0 ? (
        <div className={`pb-28`}>
          {messages?.map((message, index) => {
            return (
              <div key={message.id}>
                <div className={``}>
                  {message.from === "user"
                    ? renderUserMessage(message)
                    : renderAssistantMessage(message)}
                </div>
              </div>
            );
          })}
          {newConversationState.length > 0 && (
            <div>
              <div className={`pb-3 pt-1`}>
                {renderNewConversation(newConversationState)}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className={`w-full h-screen px-10 flex items-center justify-center`}
        >
          <div
            className={`flex flex-col justify-center items-center select-none `}
          >
            <span
              className={`bg-white p-3 rounded-full text-lg font-bold mb-3`}
            >
              Job Hunting
            </span>
            <h1 className={"font-bold text-center"}>
              Good day! How may I assist you today?
            </h1>{" "}
            <span className={`text-slate-400 text-center `}>
              Hello, I'm the Job Hunter Assistant, created by Minh Quan, Van
              Dat, and Quang Chu. I'm here to help you find a job.
            </span>
            <span className={`text-slate-400 text-center `}>
              You can donate to us through Techcombank: 19036450623011.
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
