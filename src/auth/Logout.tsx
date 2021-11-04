import { getAuth, signOut } from "firebase/auth";
import { useLanguagePacks } from "../hooks/useLanguagePacks";
import { useUser } from "../hooks/useUser";

export const Logout = () => {
  const user = useUser();
  const language = useLanguagePacks();

  const logoutClick = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log(user.name + "wylogowany poprawnie");
      })
      .catch((error) => {
        console.log("error");
      });
  };
  return <button onClick={logoutClick}>{language.buttons?.logout[0]}</button>;
};
