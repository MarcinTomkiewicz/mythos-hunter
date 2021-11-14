import { useEffect, useState } from "react";
import { auth, db } from "../config/firebaseConfig";
import { doc, onSnapshot } from "firebase/firestore";
import { User } from "@firebase/auth";

export const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<User | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged(setToken);
  }, []);

  useEffect(() => {
    if (token === null) {
      setUser(null);
      return;
    }
    return onSnapshot(doc(db, "users", token.uid), (doc) => {
      setUser({ uid: token.uid, ...doc.data() });
    });
  }, [token]);

  return user;
};