import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [token,setToken]=useState(null);

  const login = (user) => {
   
    setUser(user);

  };

  const logout =()=>{
    setUser(null)
    setToken(null)
  }

  const haveToken=(token)=>{
    setToken(token)
   
  
  }

  return (
    <AuthContext.Provider value={{user,login,logout,haveToken}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}
