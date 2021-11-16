import { getAuth, signOut } from "firebase/auth";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const Logout = () => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button onClick={handleLogout}>{language.buttons?.logout[langCode]}</button>
  );
};

export default Logout;
