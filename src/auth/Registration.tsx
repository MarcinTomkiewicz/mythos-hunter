import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "@firebase/auth";


 const createCharacter = async (uid, nickname) => {
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
      
const createPlayerArmory = async (uid) => {
    await setDoc(doc(db, "users", uid),
        {
            armory: {
            
        }
    })
}


export const Registration = () => {
    const [user, setUser] = useState({
        nickname: "",
        email: "",
        password: "",
        error: "",
    });
    const history = useHistory();

    const { nickname, email, password, error } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: "",
        });
        return user;
    };

    const resetFormOnSubmit = (e) => {
        e.target.reset();
    };

    const translatedFirebaseErrors = {
        "auth/weak-password": "Hasło powinno mieć co najmniej 6 znaków.",
        "auth/email-already-in-use": "Adres email jest już używany.",
        "auth/network-request-failed": "Brak połączenia z serwerem.",
    };

    const createUser = async (e) => {

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        }

    const checkUserNameInDb = async (username) => {
        
        const docRef = doc(db, "users", username);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            console.log("Document data: ", docSnap.data());
        } else {
            console.log("No such document!");
        }

    }
    

  const handleOnSubmit = (e) => {
    e.preventDefault();
    checkUserNameInDb(user.nickname)
      .then((data) => {
        if (!data.empty) {
          setUser({
            ...user,
            error: {
              message:
                "Użytkownik o podanym nicku już istnieje! Wybierz inny nick.",
            },
          });
          return;
        }
        createUser(e);
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div className="modal">
        <h2>Zarejestruj się</h2>
        <form
          className="registration__form"
          id="signUp-form"
          onSubmit={handleOnSubmit}
        >
          <label htmlFor="nickname">
            Imię postaci:
            <input
              value={nickname}
              type="text"
              className="form__input"
              name="nickname"
              id="nickname"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="signUp-email">
            Adres email:
            <input
              value={email}
              type="email"
              className="form__input"
              name="email"
              autoComplete="username email"
              id="signUp-email"
              required
              onChange={handleChange}
            />
          </label>
          <label htmlFor="signUp-password">
            Hasło:
            <input
              value={password}
              type="password"
              className="form__input"
              autoComplete="new-password"
              name="password"
              id="signUp-password"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="btn btn-green">
            Utwórz postać!
          </button>
        </form>
        <div className="user-action">
          Masz konto? <Link to="/login">Zaloguj się</Link>
        </div>
        <div className="error">
          {error && (
            <p>{translatedFirebaseErrors[error.code] || error.message}</p>
          )}
        </div>
      </div>
    </>
  );
};
