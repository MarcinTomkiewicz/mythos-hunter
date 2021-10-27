import { BsChatFill, BsPersonFill, BsBarChartFill } from "react-icons/bs";
import { GiAxeSword } from "react-icons/gi";
import { useLanguagePacks } from "../hooks/useLanguagePacks";
import logo from "../img/Logo.png";

type FullSizeMenuProps = {
  setHeading: React.Dispatch<React.SetStateAction<string>>;
};

export const FullSizeMenu = ({ setHeading }: FullSizeMenuProps) => {
  const language = useLanguagePacks();

  return (
    <div className="fullsize-menu">
      <img className="logo" alt="" src={logo} />
      <ul className="fullsize-menu__list">
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.character_view[0])}
        >
          <BsPersonFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.character_view[0]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.statistics[0])}
        >
          <BsBarChartFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.statistics[0]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.challenges[0])}
        >
          <GiAxeSword size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.challenges[0]}
        </li>
        <li
          className="fullsize-menu__item"
          onClick={() => setHeading(language.headers?.chat[0])}
        >
          <BsChatFill size="1.8rem" className="menu-icon menu-icon--big" />{" "}
          {language.headers === undefined
            ? "🤣🤣🤣"
            : language.headers?.chat[0]}
        </li>
      </ul>
    </div>
  );
};
