import "./scss/main.scss";
import { useState } from "react";
import logo from "./img/Logo.png";
import { GiAxeSword } from "react-icons/gi";
import {
  BsChatFill,
  BsPersonFill,
  BsBarChartFill,
  BsCaretLeftSquareFill,
} from "react-icons/bs";

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
        <div className="fullsize-menu">
          <img className="logo" alt="" src={logo} />
          <ul className="fullsize-menu__list">
            <li className="fullsize-menu__item">
              <BsPersonFill
                size="1.8rem"
                className="menu-icon menu-icon--big"
              />{" "}
              Widok postaci
            </li>
            <li className="fullsize-menu__item">
              <BsBarChartFill
                size="1.8rem"
                className="menu-icon menu-icon--big"
              />{" "}
              Statystyki
            </li>
            <li className="fullsize-menu__item">
              <GiAxeSword size="1.8rem" className="menu-icon menu-icon--big" />{" "}
              Idź na polowanie
            </li>
            <li className="fullsize-menu__item">
              <BsChatFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
              Czat
            </li>
          </ul>
        </div>
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
