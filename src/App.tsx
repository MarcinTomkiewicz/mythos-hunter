import "./scss/main.scss";
import { useEffect, useState } from "react";
import { SmallSizeMenu } from "./components/SmallSizeMenu";
import { FullSizeMenu } from "./components/FullSizeMenu";
import { UserLogged } from "./components/UserLogged";
import { UserNotLogged } from "./components/UserNotLogged";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { useLanguagePacks } from "./hooks/useLanguagePacks"
import { useLanguageSettings } from "./hooks/useLanguageSettings";

export const App = () => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();
  
  const [isFullSizeMenu, setIsFullSizeMenu] = useState(true);
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (language.headers === undefined) {      
      setHeading("🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣");
    }
    else {
      return setHeading(language.headers?.character_view[langCode]);
    }
  }, [language, langCode])  

  const user = 123;
  const toggleFullSizeMenu = () => {
    setIsFullSizeMenu((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <nav
        className={
          isFullSizeMenu ? "navigation" : "navigation navigation--small"
        }
      >
        {isFullSizeMenu ? (
          <FullSizeMenu setHeading={setHeading} />
        ) : (
          <SmallSizeMenu setHeading={setHeading} />
        )}
        <footer className="footer">
          <BsCaretLeftSquareFill
            onClick={toggleFullSizeMenu}
            size="1.8rem"
            style={{ transform: !isFullSizeMenu ? "scaleX(-1)" : "scaleX(1)" }}
            className="menu-icon"
          />
        </footer>
      </nav>
      <main className="main">
        <header className="header">
          <h1 className="heading-primary">{heading}</h1>
          {user ? <UserLogged /> : <UserNotLogged />}
        </header>
        <section className="content"></section>
      </main>
    </div>
  );
};
