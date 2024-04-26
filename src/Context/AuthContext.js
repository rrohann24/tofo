import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children})=>{
      const [ok,setOk] = useState(false);

      return (
        <AuthContext.Provider value= {[ok,setOk]}>
          {children}
        </AuthContext.Provider>
      );
};

const useAuth = () => useContext(AuthContext);

export {useAuth, AuthProvider};