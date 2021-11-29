import { FunctionComponent } from "react";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { Link } from "react-router-dom";

const UserNotLogged: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <div className="user-profile__not-logged">
      <Link className="btn btn--ghost" to="/login">
        {languagePacks.labels?.log_in[langCode]}
      </Link>
      <Link className="btn btn--full" to="/register">
        {languagePacks.labels?.register[langCode]}
      </Link>
    </div>
  );
};

export default UserNotLogged;
