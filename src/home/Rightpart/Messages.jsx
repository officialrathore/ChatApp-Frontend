import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage";
import Loading from "../../components/Loading";
import useGetSocketMessage from "../../context/useGetSocketMessage";

function Messages() {
  const { loading, messages } = useGetMessage();
  useGetSocketMessage();
  const lastMsgRef = useRef();
  useEffect(() => {
   setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, [messages]);
  return (
    <div className="flex-1 py-2 overflow-y-auto hide-scrollbar" style={{maxHeight: 'calc(92vh - 8vh)'}}>
    {loading?(<Loading/>) : (messages.length>0 && messages.map((message) => (
      <div key={message._id} ref={lastMsgRef}>
        <Message  message={message} />
      </div>
      )))}
     {!loading && messages.length === 0 && (
        <div>
          <p className="text-center mt-[25%]">Say! Hey, Hello to start conversation.....</p>
        </div>
      )}
      
    </div>
  );
}

export default Messages;
