import { FunctionComponent } from "react";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const UserNotLogged: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <div className="user-profile__not-logged">
      <button className="btn btn--ghost">
        {languagePacks.labels?.log_in[langCode]}
      </button>
      <button className="btn btn--full">
        {languagePacks.labels?.register[langCode]}
      </button>
    </div>
  );
};

export default UserNotLogged;
