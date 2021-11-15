import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const Navigation: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/armoury">
            {languagePacks.headers?.armoury[langCode]}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/challenges-of-gods">
            {languagePacks.headers?.challenges[langCode]}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/character-view">
            {languagePacks.headers?.character_view[langCode]}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/statistics">
            {languagePacks.headers?.statistics[langCode]}
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/chat">{languagePacks.headers?.chat[langCode]}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
