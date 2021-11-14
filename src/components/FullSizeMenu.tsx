import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import { useLanguagePacks } from "../hooks/useLanguagePacks";
import { useLanguageSettings } from "../hooks/useLanguageSettings";
import logo from "../img/Logo.png";

type FullSizeMenuProps = {
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

export const FullSizeMenu = ({ setHeading }: FullSizeMenuProps) => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();

  return (
    <div className="fullsize-menu">
      <img className="logo" alt="" src={logo} />
      <ul className="fullsize-menu__list">
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.character_view[langCode])}
        >
          <BsPersonFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.character_view[langCode]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.statistics[langCode])}
        >
          <BsBarChartFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.statistics[langCode]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.challenges[langCode])}
        >
          <GiAxeSword size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.challenges[langCode]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.chat[langCode])}
        >
          <BsChatFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.chat[langCode]}
        </li>
      </ul>
    </div>
  );
};
