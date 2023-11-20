import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const [endpoint,setEndpoint]=useState('http://localhost:8080/api');

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
    <AuthContext.Provider value={{user,login,logout,haveToken,endpoint}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
    return useContext(AuthContext);
}
