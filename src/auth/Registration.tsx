import { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import { doc, setDoc, collection,getDocs, addDoc, query } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";


 const createCharacter = async (uid: string, nickname: string) => {
  await setDoc(doc(db, "users", uid), 
    {
      exp: 0,
      language: 0,
      level: 1,
      nextLevel: 100,
      isOnline: true,
      name: nickname,
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
        material: 50,
        wood: 50,
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
  const [verifiedUser, setVerifiedUser] = useState<Boolean>(false);

  const checkUserNameInDb = async (username:string) => {
    const existingUser = query(collection(db, "users"));
    const allUsers = await getDocs(existingUser);
    
      allUsers.docs.forEach(user => {
        if (username === user.data().name) {
          return setVerifiedUser(true);
        } else {
          return setVerifiedUser(false);
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
    checkUserNameInDb(user.nickname);
      if (verifiedUser === true) {
        createUser(e);
      } else {
        alert(`Uzytkownik o nazwie ${nickname} juz istnieje! Wybierz inną nazwę!`)
      }

    
    
  };

  return (
    <>
      <div className="">
        <h2>Zarejestruj się</h2>
        <form
          className=""
          id="signUp-form"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="">
            Imię postaci:
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
            Adres email:
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
            Hasło:
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
            Utwórz postać!
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
