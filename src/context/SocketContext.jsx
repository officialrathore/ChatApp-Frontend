import {createContext, useContext, useEffect, useState} from 'react';
import {useAuth} from './AuthProvider';
import io from 'socket.io-client';
const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
}

export const SocketProvider = ({children})=>{
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [authUser] = useAuth();

    useEffect(() => {
        if (authUser) {
            const socket = io("https://chat-app-backend-tau-lemon.vercel.app", {
                query: { userId: authUser.user.id },
                withCredentials: true,
            });
            setSocket(socket);
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
            return () => {
                socket.close();
            };
        }else{
            if (socket) {
                socket.close();
                setSocket(null);
            }   
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContext.Provider>
    );  
}
