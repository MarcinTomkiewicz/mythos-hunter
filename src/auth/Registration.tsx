import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import { doc, setDoc, collection,getDocs, addDoc, query } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";
import { useLanguagePacks } from "../hooks/useLanguagePacks";


 const createCharacter = async (uid: string, nickname: string) => {
  await setDoc(doc(db, "users", uid), 
    {
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
        agi: 1,
        def: 1,
        dmg: 1,
        int: 1,
        luck: 1,
        perc: 1,
        speed: 1,
        str: 1,
        tough: 1,
        vit: 1,
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
  await addDoc(collection(testUser, "armory"),{})
}


export const Registration = () => {
  const language = useLanguagePacks();
  const [user, setUser] = useState({
    nickname: "",
    email: "",
    password: "",
    error: "",
  });
  

  const { nickname, email, password} = user;

  const handleChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error: "",
    });
    return user;
  };

  const resetFormOnSubmit = (e: any) => {
    e.target.reset();
  };

  // const translatedFirebaseErrors = {
  //   "auth/weak-password": "Hasło powinno mieć co najmniej 6 znaków.",
  //   "auth/email-already-in-use": "Adres email jest już używany.",
  //   "auth/network-request-failed": "Brak połączenia z serwerem.",
  // };
  const [usernameExists, setUsernameExists] = useState<Boolean>(false);

  const checkUserNameInDb = async (username:string) => {
    const existingUser = query(collection(db, "users"));
    const allUsers = await getDocs(existingUser);
    
    allUsers.docs.forEach(user => {
        if (username === user.data().name) {
          return setUsernameExists(true);
        }

      });
  }
  
  const createUser = (e: any) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      createCharacter(user.uid, nickname);
      createPlayerArmory(user.uid);
      resetFormOnSubmit(e);
    }).catch((error) => {
        setUser({
          ...user,
          error,
        });
      });
  };


  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
    console.log(124, usernameExists)
    checkUserNameInDb(user.nickname);
      if (usernameExists === true) {
        alert(`Uzytkownik o nazwie ${nickname} juz istnieje! Wybierz inną nazwę!`)
      } else {
        createUser(e);
      }
    setUsernameExists(false);
  };

  return (
    <>
      <div className="">
        <h2>{language.headers?.registration[0]}</h2>
        <form
          className=""
          id="signUp-form"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="">
            {language.labels?.char_name[0]}:
            <input
              value={nickname}
              type="text"
              className="f"
              name="nickname"
              id="nickname"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            {language.labels?.email[0]}:
            <input
              value={email}
              type="email"
              className=""
              name="email"
              autoComplete="username email"
              id="signUp-email"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            {language.labels?.password[0]}:
            <input
              value={password}
              type="password"
              className=""
              autoComplete="new-password"
              name="password"
              id="signUp-password"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="">
            {language.buttons?.create_char[0]}!
          </button>
        </form>
        <div className="user-action">
          Masz konto? <Link to="/login">Zaloguj się</Link>
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
