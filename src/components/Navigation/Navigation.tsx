import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";

const Navigation: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const user = useUser();

  const loggedUser = [
    <NavLink to="/armoury">{languagePacks.headers?.armoury[langCode]}</NavLink>,
    <NavLink to="/challenges-of-gods">
      {languagePacks.headers?.challenges[langCode]}
    </NavLink>,
    <NavLink to="/character-view">
      {languagePacks.headers?.character_view[langCode]}
    </NavLink>,
    <NavLink to="/statistics">
      {languagePacks.headers?.statistics[langCode]}
    </NavLink>,
    <NavLink to="/chat">{languagePacks.headers?.chat[langCode]}</NavLink>,
  ];

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/about">
            {languagePacks.headers?.about[langCode]}
          </NavLink>
        </li>
        {user
          ? loggedUser.map((link) => (
              <li className="navigation__item">{link}</li>
            ))
          : null}
      </ul>
    </nav>
  );
};

export default Navigation;
