import "./scss/main.scss";
import { useState } from "react";
import { SmallSizeMenu } from "./components/SmallSizeMenu";
import { FullSizeMenu } from "./components/FullSizeMenu";
import { BsCaretLeftSquareFill } from "react-icons/bs";

export const App = () => {
  const [isFullSizeMenu, setIsFullSizeMenu] = useState(true);
  const [heading, setHeading] = useState("Wybór postaci");
  const toggleFullSizeMenu = () => {
    setIsFullSizeMenu((prev) => !prev);
  };
  return (
    <div className="wrapper">
      <nav
        className={
          isFullSizeMenu ? "navigation" : "navigation navigation--small"
        }
      >
        {isFullSizeMenu ? <FullSizeMenu /> : <SmallSizeMenu />}
        <footer className="footer">
          <BsCaretLeftSquareFill
            onClick={toggleFullSizeMenu}
            size="1.8rem"
            style={{ transform: !isFullSizeMenu ? "rotate(180deg)" : "" }}
            className="menu-icon"
          />
        </footer>
      </nav>
      <main className="main">
        <header className="header">
          <h1 className="heading-primary">{heading}</h1>
        </header>
        <section className="content"></section>
      </main>
    </div>
  );
};
