import React,{createContext,useState,useContext} from 'react'
export const AuthContext = createContext();
export const AuthProvider=({children})=> {
    const initialState = localStorage.getItem('ChatApp');
    const [authUser, setAuthUser] = useState(initialState ? JSON.parse(initialState) : undefined);
    console.log("Auth User in Context:", authUser); 
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);