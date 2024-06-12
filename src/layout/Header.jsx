import { useContext, useEffect } from "react";
import { Button } from "../components/Button";
import { UserPanel } from "../components/UserPanel";
import { useInput } from "../hooks/useInput";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navigation } from "../components/Navigaion";
import { setTitleActionCreator } from "../store/actions/globalActions";
import { myContext } from "../context/myContext";
import { Motivation } from "../components/Motivation";

export const Header = ({ title, count, subscribed = false }) => {
  const [searchText, searchChangeHandler] = useInput("");
  const [subscribe, subscribeChangeHandler] = useInput("");
  const storeTitle = useSelector((s) => s.global.title);
  const { theme, setTheme } = useContext(myContext);
  const dispatch = useDispatch();

  console.log("Header props > ", { title, count, subscribed });

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    console.log("searchText > ", searchText);
  }, [searchText]);

  return (
    <>
      <header className="head">
        <div>{storeTitle}</div>
        <Navigation />
        <div>
          <input
            type="text"
            value={searchText}
            onChange={searchChangeHandler}
          />
          <Button onClick={() => dispatch(setTitleActionCreator(searchText))}>
            Change App Name
          </Button>
        </div>
        <div>
          <Button onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </Button>
        </div>
        <UserPanel />
      </header>
      <Motivation />
    </>
  );
};
