import React from "react";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user.id;

  const chatName = itsMe ? "chat-end":"chat-start";
  const chatColor = itsMe ? "bg-blue-500":"bg-gray-600";
  
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([],{
    hour: '2-digit',
    minute: '2-digit'
  })
  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble ${chatColor} text-white`}>{message.message}</div>
        <div className="opacity-50 chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
    // <>
    //    <div className="chat chat-start">
    //     <div className="chat-image avatar">
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="Tailwind CSS chat bubble component"
    //           src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
    //         />
    //       </div>
    //     </div>
    //     <div className="chat-header">
    //       Obi-Wan Kenobi
    //       <time className="text-xs opacity-50">12:45</time>
    //     </div>
    //     <div className="chat chat-start">
    //       <div className="text-black chat-bubble chat-bubble-accent">
    //         {message.message}
    //       </div>
    //     </div>
    //     <div className="opacity-50 chat-footer">Delivered</div>
    //   </div>
    //   <div className="chat chat-end">
    //     <div className="chat-image avatar">
    //       <div className="w-10 rounded-full">
    //         <img
    //           alt="Tailwind CSS chat bubble component"
    //           src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp"
    //         />
    //       </div>
    //     </div>
    //     <div className="chat-header">
    //       Anakin
    //       <time className="text-xs opacity-50">12:46</time>
    //     </div>
    //     <div className="chat chat-end">
    //       <div className="text-black chat-bubble chat-bubble-warning">
    //         To be on the Council at your age.
    //       </div>
    //     </div>
    //     <div className="opacity-50 chat-footer">Seen at 12:46</div>
    //   </div>
    // </>
  );
}

export default Message;
