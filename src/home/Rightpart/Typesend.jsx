import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage';

function Typesend() {
  const {loading, sendMessages} = useSendMessage();
  const [message, setMessage] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log(e.target.value)
    await sendMessages(message);
    // sendMessages({ message });
    setMessage("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex space-x-1 h-[8vh] bg-gray-800 '> 
    <div className='p-auto bg-slate-800 w-[70%] mx-4'>
        <input type="text" placeholder="Type here" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-4 py-3 mt-1 border border-gray-700 rounded-xl ooutline-none" />
    </div>
    <button>
        <IoSend className='text-3xl cursor-pointer'/>
    </button>
    </div>
    </form>
  )
}

export default Typesend