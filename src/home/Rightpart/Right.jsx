import React, { useEffect } from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Typesend from "./Typesend";
import useConversation from "../../zustand/useConversation";
// import Loading from '../../components/Loading';
import { useAuth } from "../../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="flex flex-col w-full text-gray-300 bg-slate-900">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div style={{ minHeight: "calc(92vh - 8vh)" }}>
              <Messages />
            </div>
            <Typesend />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
     <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="absolute btn btn-ghost drawer-button lg:hidden left-5"
        >
          <CiMenuFries className="text-xl text-white" />
        </label>
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-center">
            Welcome{" "}
            <span className="text-xl font-semibold">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
