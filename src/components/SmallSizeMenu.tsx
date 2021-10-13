import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import logo from "../img/Logo.png";

export const SmallSizeMenu = () => {
  return (
    <div className="smallsize-menu">
      <img className="logo logo--small" alt="" src={logo} />
      <ul className="smallsize-menu__list">
        <li className="smallsize-menu__item">
          <BsPersonFill size="2rem" className="menu-icon" />
        </li>
        <li className="smallsize-menu__item">
          <BsBarChartFill size="2rem" className="menu-icon" />
        </li>
        <li className="smallsize-menu__item">
          <GiAxeSword size="2rem" className="menu-icon" />
        </li>
        <li className="smallsize-menu__item">
          <BsChatFill size="2rem" className="menu-icon" />
        </li>
      </ul>
    </div>
  );
};
