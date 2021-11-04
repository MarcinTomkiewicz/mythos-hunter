import {
    Link,
    // useHistory
} from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLanguagePacks } from "../hooks/useLanguagePacks";

const resetFormOnSubmit = (e:any) => {
  e.target.reset();
};

export const Login = () => {
    const language = useLanguagePacks();
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

//   const history = useHistory();

  const { email, password} = user;

  const handleChange = (e:any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
    return user;
  };

//   const translatedFirebaseErrors = {
//     "auth/user-not-found":
//       "Próbowano się zalogować do nieistniejącego konta. Przyczyn może być wiele: takiego konta nigdy nie było lub istniało, ale zostało skasowane.",
//     "auth/too-many-requests":
//       "Dostęp do konta został tymczasowo ograniczony z powodu wielokrotnych nieudanych prób zalogowania. Możesz odzyskać dostęp poprzez zresetowanie hasła albo spróbuj zalogować się później.",
//     "auth/wrong-password": "Podane hasło jest błędne.",
//   };

  const handleOnSubmit = (e:any) => {
      e.preventDefault();
      
      const auth = getAuth();

      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          resetFormOnSubmit(e);
          const user = userCredential.user;

        console.log(user);
      }).catch((error) => {
          setUser({
              ...user,
              error,
          });
      });
  };

  return (
    <>
      <div className="modal active">
        <h2>{language.headers?.login[0]}</h2>
        <form
          className="registration__form login__form"
          id="logIn-form"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="logIn-email">
            {language.labels?.email[0]}:
            <input
              type="email"
              className="form__input"
              name="email"
              autoComplete="username email"
              id="logIn-email"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="logIn-password">
            {language.labels?.password[0]}:
            <input
              type="password"
              className="form__input"
              autoComplete="current-password"
              name="password"
              id="logIn-password"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-green">
            {language.buttons?.log_in[0]}!
          </button>
        </form>

        <div className="user-action">
          Nie masz konta? <Link to="/register">{language.buttons?.create_char[0]}</Link>
        </div>
        {/* <div className="error">
          {error && (
            <p>{translatedFirebaseErrors[error.code] || error.message}</p>
          )}
        </div> */}
      </div>
    </>
  );
};
