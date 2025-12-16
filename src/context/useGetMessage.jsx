import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation';
import api from '../utils/axios';

function useGetMessage() {
    const [loading, setLoading] = useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            if (selectedConversation && selectedConversation._id) {
                
                try {
                    const response = await api.get(`/api/message/get/${selectedConversation._id}`, {
                        withCredentials: true,
                    });
                    setMessages(response.data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching messages:", error);
                    setLoading(false);
                }
            }
        };
        getMessages();
    }, [selectedConversation, setMessages]);
  return {loading, messages};
}

export default useGetMessage
