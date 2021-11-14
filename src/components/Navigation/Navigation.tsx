import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

const Navigation: FunctionComponent = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/character">Widok postaci</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/stats">Statystyki</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/challenges-of-gods">Wyzwania bogów</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/chat">Czat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
