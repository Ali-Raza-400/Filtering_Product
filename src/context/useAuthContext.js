import { createContext,useContext,useState } from "react";


export  const AuthContext = createContext();
export const useAuth=()=>{
    return useContext(AuthContext)
}
export const AuthContextProvider = ({children})=>{
    const [user,setUser] = useState("Ali");
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    return(
        <AuthContext.Provider value={{user,setUser,setIsLoggedIn,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}