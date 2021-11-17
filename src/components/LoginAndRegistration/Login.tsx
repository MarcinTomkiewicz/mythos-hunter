import { Link } from "react-router-dom";
import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import TopBar from "../atoms/TopBar/TopBar";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
  error: "",
};


const Login = () => {
  const navigate = useNavigate();
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();
  const isLogged = useUser();

  const [user, setUser] = useState(initialValues);

  const { email, password } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const auth = getAuth(); 

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        setUser(user);
      })
      .catch((error) => {
        setUser({
          ...user,
          error,
        });
      });
  };

  return (
    <>
      <TopBar title={language.headers?.login[langCode]} />
      {isLogged !== null ? `${language.labels?.already_logged[langCode]} ${isLogged?.name}` :
      <div className="content__wrapper">
        <form
          className="registration__form login__form"
          id="logIn-form"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="logIn-email">
            {language.labels?.email[langCode]}:
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
            {language.labels?.password[langCode]}:
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
            {language.buttons?.log_in[langCode]}!
          </button>
        </form>


      </div>
       }
    </>
  );
};

export default Login;
