import { useSelector } from "react-redux";
import { Navigation } from "../components/Navigaion";
import { Motivation } from "../components/Motivation";

export const Footer = () => {
  const title = useSelector((s) => s.global.title);

  return (
    <footer className="head">
      <div>{title} Footer</div>
      <Motivation />
      <Navigation />
    </footer>
  );
};
