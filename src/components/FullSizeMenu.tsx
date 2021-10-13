import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import logo from "../img/Logo.png";

type FullSizeMenuProps = {
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

export const FullSizeMenu = ({ setHeading }: FullSizeMenuProps) => {
  return (
    <div className="fullsize-menu">
      <img className="logo" alt="" src={logo} />
      <ul className="fullsize-menu__list">
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading("Widok postaci")}
        >
          <BsPersonFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          Widok postaci
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading("Statystyki")}
        >
          <BsBarChartFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          Statystyki
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading("Idź na polowanie")}
        >
          <GiAxeSword size="1.8rem" className="menu-icon menu-icon--big" /> Idź
          na polowanie
        </li>
        <li className="fullsize-menu__item" onClick={() => setHeading("Czat")}>
          <BsChatFill size="1.8rem" className="menu-icon menu-icon--big" /> Czat
        </li>
      </ul>
    </div>
  );
};
