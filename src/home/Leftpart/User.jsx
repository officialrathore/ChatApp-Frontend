import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import profile from "../../assets/profile.jpg";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center py-3 space-x-3 cursor-pointer px-7">
        {/* Avatar with Online Indicator */}
        <div className="relative">
          <img src={profile} alt="User" className="w-12 h-12 rounded-full" />
          <span
            className={`absolute top-0 right-0 w-3 h-3 rounded-full border border-white ${
              isOnline ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </div>

        {/* User Info */}
        <div>
          <h1 className="font-bold">{user.fullname}</h1>
          <span className="text-sm text-gray-400">{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
