import React, { useState } from "react";
import { db } from "../../config/firebaseConfig";
import {
  doc,
  setDoc,
  collection,
  getDocs,
  addDoc,
  query,
} from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useUser } from "../../hooks/useUser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const initialValues = {
  nickname: "",
  email: "",
  password: "",
  error: "",
};

const createCharacter = async (uid: string, nickname: string) => {
  await setDoc(doc(db, "users", uid), {
    exp: 0,
    character_points: 0,
    language: 0,
    level: 1,
    nextLevel: 100,
    is_online: true,
    name: nickname,
    gender: "none",
    role: "player",
    uid,
    nationality: "none",
    stats: {
      str: 1,
      agi: 1,
      tough: 1,
      vit: 1,
      int: 1,
      perc: 1,
      speed: 1,
      def: 1,
      dmg: 1,
      luck: 1,
    },
    resources: {
      gold: 100,
      marble: 50,
      wood: 50,
      workers: 50,
    },
    buildings: {
      agora: 1,
      hippodrome: 1,
      andron: 1,
      gold_mine: 1,
      gymnasion: 1,
      gynaikon: 1,
      mausoleum: 0,
      quarry: 1,
      samwill: 1,
      temple: 0,
      theatre: 0,
    },
  });
};

const createPlayerArmory = async (uid: string) => {
  const testUser = doc(db, `users/${uid}`);
  await addDoc(collection(testUser, "armory"), {});
};

const Registration = () => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();
  const isLogged = useUser();
  const [user, setUser] = useState(initialValues);

  const usersFromDatabase: any[] = [];

  const { nickname, email, password } = user;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const checkUserNameInDb = async (username: string) => {
    const existingUser = query(collection(db, "users"));
    const allUsers = await getDocs(existingUser);

    allUsers.docs.forEach((user) => {
      usersFromDatabase.push(user.data().name);
    });
    return usersFromDatabase;
  };

  const createUser = (e: React.FormEvent<HTMLFormElement>) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        createCharacter(user.uid, nickname);
        createPlayerArmory(user.uid);
        setUser(initialValues);
      })
      .catch((error) => {
        setUser({
          ...user,
          error,
        });
      });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isUserInDatabase: boolean = false;
    const usersExistingInDatabase = await checkUserNameInDb(user.nickname);
    usersExistingInDatabase.map((playerName) => {
      if (playerName === user.nickname) {
        return (isUserInDatabase = true);
      }
      return 0;
    });
    if (isUserInDatabase) {
      alert(
        `Uzytkownik o nazwie ${nickname} juz istnieje! Wybierz inną nazwę! /n Czekamy na zmergowanie Przemka errorów, eby je wymienić na lepsze, bo ten się nie podoba Marcinowi :(`
      );
      setUser({ nickname: "", email: "", password: "", error: "" });
    } else {
      createUser(e);
    }
    isUserInDatabase = false;
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
            className=""
            id="signUp-form"
            onSubmit={handleOnSubmit}
          >
            <label htmlFor="">
              <TextField
                label={language.labels?.char_name[langCode]}
                variant="outlined"
                size="small"
                value={nickname}
                type="text"
                className="f"
                name="nickname"
                id="nickname"
                required
                style={{ paddingBottom: "10px", fontSize: "12px" }}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              <TextField
                label={language.labels?.email[langCode]}
                variant="outlined"
                size="small"
                value={email}
                type="email"
                className=""
                name="email"
                autoComplete="username email"
                id="signUp-email"
                required
                style={{ paddingBottom: "10px" }}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              <TextField
                label={language.labels?.password[langCode]}
                variant="outlined"
                size="small"
                value={password}
                type="password"
                className=""
                autoComplete="new-password"
                name="password"
                id="signUp-password"
                required
                style={{ paddingBottom: "10px" }}
                onChange={handleChange}
              />
            </label>
            <br />
            {nickname.length === 0 ||
            password.length === 0 ||
            email.length === 0 ? (
              <button
                type="submit"
                className=""
                style={{ padding: "5px 20px", border: "1px solid black" }}
                disabled
              >
                {language.buttons?.create_char[langCode]}!
              </button>
            ) : (
              <button
                type="submit"
                className=""
                style={{ padding: "5px 20px", border: "1px solid black" }}
              >
                {language.buttons?.create_char[langCode]}!
              </button>
            )}
          </Box>
        </div>
      )}
    </>
  );
};

export default Registration;
