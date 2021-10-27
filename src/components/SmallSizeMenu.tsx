import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import logo from "../img/Logo.png";

type SmallSizeMenuProps = {
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

export const SmallSizeMenu = ({ setHeading }: SmallSizeMenuProps) => {
  return (
    <div className="smallsize-menu">
      <img className="logo logo--small" alt="" src={logo} />
      <ul className="smallsize-menu__list">
        <li
          className="smallsize-menu__item"
          onClick={() => setHeading("Widok postaci")}
        >
          <BsPersonFill size="2rem" className="menu-icon" />
        </li>
        <li
          className="smallsize-menu__item"
          onClick={() => setHeading("Statystyki")}
        >
          <BsBarChartFill size="2rem" className="menu-icon" />
        </li>
        <li
          className="smallsize-menu__item"
          onClick={() => setHeading("Idź na polowanie")}
        >
          <GiAxeSword size="2rem" className="menu-icon" />
        </li>
        <li className="smallsize-menu__item" onClick={() => setHeading("Czat")}>
          <BsChatFill size="2rem" className="menu-icon" />
        </li>
      </ul>
    </div>
  );
};
