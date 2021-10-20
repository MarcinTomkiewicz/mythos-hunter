import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../config/firebaseConfig";
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore";
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

    const handleChange = (e:any) => {
        console.log(typeof e, "75")
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: "",
        });
        return user;
    };

    const resetFormOnSubmit = (e:any) => {
        e.target.reset();
    };

    const translatedFirebaseErrors = {
        "auth/weak-password": "Hasło powinno mieć co najmniej 6 znaków.",
        "auth/email-already-in-use": "Adres email jest już używany." ,
        "auth/network-request-failed": "Brak połączenia z serwerem.",
    };

    const createUser = async (e:boolean) => {

    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        const user = userCredential.user;
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        }

    const checkUserNameInDb = async (username:string) => {
        
        const docRef = doc(db, "users", username);
        const docSnap = await getDoc(docRef);
    
        console.log(docSnap.data(), 111)

        if (docSnap.exists()) {
         
        } else {
            console.log("No such document!");
        }

    }
    checkUserNameInDb("Zenek");
    

  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
      const docRef = await addDoc(collection(db, "users"), {
          createUser();
      });
  };

  return (
    <>
      <div className="">
        <h2>Zarejestruj się</h2>
        <form
          className=""
          id="signUp-form"
        //   onSubmit={handleOnSubmit}
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
