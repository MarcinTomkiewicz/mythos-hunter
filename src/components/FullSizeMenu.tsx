import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import logo from "../img/Logo.png";

export const FullSizeMenu = () => {
  return (
    <div className="fullsize-menu">
      <img className="logo" alt="" src={logo} />
      <ul className="fullsize-menu__list">
        <li className="fullsize-menu__item">
          <BsPersonFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          Widok postaci
        </li>
        <li className="fullsize-menu__item">
          <BsBarChartFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          Statystyki
        </li>
        <li className="fullsize-menu__item">
          <GiAxeSword size="1.8rem" className="menu-icon menu-icon--big" /> Idź
          na polowanie
        </li>
        <li className="fullsize-menu__item">
          <BsChatFill size="1.8rem" className="menu-icon menu-icon--big" /> Czat
        </li>
      </ul>
    </div>
  );
};
