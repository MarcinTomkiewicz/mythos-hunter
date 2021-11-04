import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Registration } from "./auth/Registration";
import "./scss/main.scss";
import { useEffect, useState } from "react";
import { SmallSizeMenu } from "./components/SmallSizeMenu";
import { FullSizeMenu } from "./components/FullSizeMenu";
import { UserLogged } from "./components/UserLogged";
import { UserNotLogged } from "./components/UserNotLogged";
import { BsCaretLeftSquareFill } from "react-icons/bs";
import { useLanguagePacks } from "./hooks/useLanguagePacks";
import { Login } from "./auth/Login";
import { useLoader } from "./hooks/useLoader";
import { useUser } from "./hooks/useUser";
import { Logout } from "./auth/Logout";

export const App = () => {
  const user = useUser();
  const language = useLanguagePacks();
  const loader = useLoader();

  const [isFullSizeMenu, setIsFullSizeMenu] = useState(true);
  const [heading, setHeading] = useState<any>("");

  useEffect(() => {
    if (language.headers === undefined) {
      setHeading(loader);
    } else {
      return setHeading(language.headers?.character_view[0]);
    }
  }, [language, loader]);

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
        <section className="content">
          <Router>
            {user === null ? (
              <>
                <Registration />
                <Login />
              </>
            ) : (
              <Logout />
            )}
          </Router>
        </section>
      </main>
    </div>
  );
};
