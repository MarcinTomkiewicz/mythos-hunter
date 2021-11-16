import { FunctionComponent } from "react";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { Link } from "react-router-dom";

const UserNotLogged: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <div className="user-profile__not-logged">
      <button className="btn btn--ghost">
        <Link to="/login">{languagePacks.labels?.log_in[langCode]}</Link>
      </button>
      <button className="btn btn--full">
        <Link to="/register">{languagePacks.labels?.register[langCode]}</Link>
      </button>
    </div>
  );
};

export default UserNotLogged;
