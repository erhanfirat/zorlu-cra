import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useHistory } from "react-router-dom";

export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [theme, setTheme] = useLocalStorage("context-theme", "light");
  const [lang, setLang] = useLocalStorage("context-lang", "tr");
  const history = useHistory();

  const logout = () => {
    // ??
    // remove token
    // yönlendirme login veya anasayfa
    // user state i resetlenmeli
    localStorage.removeItem("token");
    setUser({ name: "Anonim", email: null });

    history.push("/");
  };

  const valueToContext = {
    user,
    setUser,
    theme,
    setTheme,
    lang,
    setLang,
    logout,
  };

  useEffect(()=> {
    // login/logout olduğunda tetiklenir
    if (user.email) {
      // todo: kullanıcının dil ve tema seçimlerini backend den getir
      
    }
  }, [user]);

  return (
    <myContext.Provider value={valueToContext}>{children}</myContext.Provider>
  );
};
