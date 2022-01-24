import { FunctionComponent, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";

const Navigation: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  const user = useUser();
  const [links, setLinks] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    const userLinks = [
      <NavLink to="/armoury">
        {languagePacks.headers?.armoury[langCode]}
      </NavLink>,
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

    if (user?.role === "admin") {
      setLinks([
        <NavLink to="/admin-panel">
          {languagePacks.headers?.admin_panel[langCode]}
        </NavLink>,
        ...userLinks,
      ]);
    } else if (user?.role === "player") {
      setLinks(userLinks);
    } else {
      setLinks(null);
    }
  }, [user, langCode, languagePacks]);

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
        {links?.map((link, i) => (
          <li key={i} className="navigation__item">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
