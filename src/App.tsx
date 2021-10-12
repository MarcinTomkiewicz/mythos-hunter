import "./scss/main.scss";
import logo from "./img/Logo.png";
import { GiAxeSword } from "react-icons/gi";
import {
  BsChatFill,
  BsPersonFill,
  BsBarChartFill,
  BsCaretLeftSquareFill,
} from "react-icons/bs";

export const App = () => {
  return (
    <main className="main">
      <nav className="navigation">
        <div className="fullsize-menu">
          <img className="logo" alt="" src={logo} />
          <ul className="fullsize-menu__list">
            <li className="fullsize-menu__item">
              <BsPersonFill className="menu-icon menu-icon--big" /> Widok
              postaci
            </li>
            <li className="fullsize-menu__item">
              <BsBarChartFill className="menu-icon menu-icon--big" /> Statystyki
            </li>
            <li className="fullsize-menu__item">
              <GiAxeSword className="menu-icon menu-icon--big" /> Idź na
              polowanie
            </li>
            <li className="fullsize-menu__item">
              <BsChatFill className="menu-icon menu-icon--big" /> Czat
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};
