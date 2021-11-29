import { FunctionComponent } from "react";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import soldier from "../../img/DaOPA5.gif";
import TopBar from "../atoms/TopBar/TopBar";

const NotFound: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <>
      <TopBar title={languagePacks.labels?.not_found[langCode]} />
      <div className="center-wrapper">
        <img
          src={soldier}
          style={{ height: "350px" }}
          alt={languagePacks.labels?.not_found[langCode]}
        />
      </div>
    </>
  );
};

export default NotFound;
