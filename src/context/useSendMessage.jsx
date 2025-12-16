import React, { useState } from 'react';
import axios from 'axios';
import useConversation from '../zustand/useConversation';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessages = async (message) => {
        if (!message || !selectedConversation?._id) return;
        setLoading(true);
        try {
            const response = await axios.post(
                `/api/message/send/${selectedConversation._id}`,
                { message },
                { withCredentials: true }
            );
            setMessages([...messages, response.data.newMessage]);
            setLoading(false);
        } catch (error) {
            console.error("Error in sending messages:", error);
            setLoading(false);
        }
    };

    return { loading, sendMessages };
}

export default useSendMessage;
