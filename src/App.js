// Outsource
import { createContext, useContext, useEffect, useState } from "react";

// Internal
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { PageBody } from "./layout/PageBody";

// Stylings
import { useLocalStorage } from "./hooks/useLocalStorage";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { MyContextProvider, myContext } from "./context/myContext";

import "./App.css";

function App() {
  const { setUser, theme } = useContext(myContext);

  const moveToParent = (val) => {
    console.warn("Child componentten gelen value: ", val);
  };

  useEffect(() => {
    // uygulama başarıyla yüklendi!
    // todo: kimlik doğrulama
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("**** auto logged in **** ", res.data);
          setUser(res.data);
          localStorage.setItem("token", res.data.token);
        });
    }
  }, []);

  return (
    <div className={theme}>
      <Header title="Merhaba ReactJS" count={13} moveToParent={moveToParent} />
      <PageBody />
      <Footer />
    </div>
  );
}

export default App;
