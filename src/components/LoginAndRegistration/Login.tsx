import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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
      {isLogged !== null ? (
        `${language.labels?.already_logged[langCode]} ${isLogged?.name}`
      ) : (
        <div className="content__wrapper">
          <Box
            component="form"
            sx={{
              width: "100%",
            }}
            noValidate
            autoComplete="off"
            className="registration__form login__form"
            id="logIn-form"
            onSubmit={handleOnSubmit}
          >
            <label htmlFor="logIn-email">
              <TextField
                label={language.labels?.email[langCode]}
                variant="outlined"
                size="small"
                type="email"
                className="form__input"
                name="email"
                autoComplete="username email"
                id="logIn-email"
                required
                style={{ paddingBottom: "10px" }}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="logIn-password">
              <TextField
                label={language.labels?.password[langCode]}
                variant="outlined"
                size="small"
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
          </Box>
        </div>
      )}
    </>
  );
};

export default Login;
