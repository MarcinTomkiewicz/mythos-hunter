import { FunctionComponent, useEffect, useState } from "react";
import LeftPanelBox from "./LeftPanelBox";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import Registration from "../LoginAndRegistration/Registration";
import Login from "../LoginAndRegistration/Login";
import { useUser } from "../../hooks/useUser";

const LeftPanel: FunctionComponent = () => {
  const user = useUser();
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();

  const [panelChanger, setPanelChanger] = useState<string>("login");
  const [leftPanel, setLeftPanel] = useState<any>(<Login />);

  useEffect(() => {
    if (user === null && panelChanger === "login") {
      setLeftPanel(<Login />);
    }
    if (user === null && panelChanger === "register") {
      setLeftPanel(<Registration />);
    }
    if (user !== null) {
      setLeftPanel(
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas sit id doloribus. Nesciunt assumenda unde illo commodi reiciendis atque dicta obcaecati sapiente iure iste, amet officiis quibusdam ex totam."
      );
    }
  }, [panelChanger, user]);

  const determinePanels = () => {
    if (user === null && panelChanger === "register") {
      return (
        <>
          <div className="user-action">
            {languagePacks.labels?.has_account[langCode]}{" "}
            <button
              onClick={() => {
                setPanelChanger("login");
              }}
            >
              {languagePacks.labels?.log_in[langCode]}
            </button>
          </div>
        </>
      );
    }
    if (user === null && panelChanger === "login") {
      return (
        <>
          <div className="user-action">
            {languagePacks.labels?.no_account[langCode]}{" "}
            <button
              onClick={() => {
                setPanelChanger("register");
              }}
            >
              {languagePacks.buttons?.create_char[langCode]}
            </button>
          </div>
        </>
      );
    }
    if (
      user !== null &&
      (panelChanger === "login" || panelChanger === "register")
    ) {
      setPanelChanger("statistics");
    }
    if (user === null && panelChanger === "statistics") {
      setPanelChanger("login");
    }
  };

  return (
    <div className="left-panel">
      <LeftPanelBox
        title={
          languagePacks.headers !== undefined
            ? languagePacks.headers[panelChanger][langCode]
            : ""
        }
      >
        {leftPanel}
        {determinePanels()}
      </LeftPanelBox>
      <LeftPanelBox
        title={languagePacks.headers?.resources_and_others[langCode]}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        aliquid recusandae architecto, libero eius nulla soluta quo unde rem
        quia atque illo debitis aspernatur veniam nihil ipsum deserunt iste?
      </LeftPanelBox>
    </div>
  );
};

export default LeftPanel;
