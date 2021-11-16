import { FunctionComponent } from "react";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const NotFound: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return <div>{languagePacks.labels?.not_found[langCode]}</div>;
};

export default NotFound;
