import { getAuth, signOut } from "firebase/auth";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";

export const Logout = () => {
  const user = useUser();
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();

  const logoutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log(user.name + " wylogowany poprawnie");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return <button onClick={logoutClick}>{language.buttons?.logout[langCode]}</button>;
};
