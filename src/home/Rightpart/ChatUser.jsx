import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { CiMenuFries } from "react-icons/ci";
import profile from "../../assets/profile.jpg";
function ChatUser() {
  const {selectedConversation}=useConversation();
  const {onlineUsers} = useSocketContext();
  const getOnlineUserStatus = (userId) => {
    return onlineUsers.includes(userId) ? 'Online' : 'Offline';
  };
  console.log(selectedConversation);
  return (
    <>
    <div className="relative flex flex-center h-[8%] justify-center gap-4 bg-slate-800 hover:bg-slate-700">
          <label
        htmlFor="my-drawer-2"
        className="absolute btn btn-ghost drawer-button lg:hidden left-5"
      >
        <CiMenuFries className="text-xl text-white" />
      </label>  
    <div className="flex h-[8vh] items-center justify-center pt-2 pb-2 duration-300 bg-gray-800 pspace-x-3 hover:bg-gray-700">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src={profile} className="rounded-full"/>
        </div>
      </div>
      <div className="pl-2">
        <h1 className="text-xl">{selectedConversation.fullname}</h1>
        <span className="text-sm">{getOnlineUserStatus(selectedConversation._id)}</span>
      </div>
    </div>
    </div>
    </>
  );
}

export default ChatUser;
