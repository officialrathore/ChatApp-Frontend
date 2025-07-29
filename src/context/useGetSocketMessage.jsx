import React, { useEffect } from 'react'
import { useSocketContext } from './SocketContext'
import useConversation from '../zustand/useConversation';
import sound from '../assets/wptone.mp3';

function useGetSocketMessage() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            const audio = new Audio(sound);
            audio.play();
            setMessages([...messages, newMessage]);
        });
        return () => {
            socket.off("newMessage");
        }
    }, [socket, messages, setMessages]);
}

export default useGetSocketMessage;
