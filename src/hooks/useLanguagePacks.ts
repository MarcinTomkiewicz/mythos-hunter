import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
  const [languagePacks, setLanguagePacks] = useState<any>({});

  useEffect(() => {
    const getLanguagePacks = async () => {
      const querySnapshot = await getDocs(collection(db, "language_packs"));
      querySnapshot.forEach((doc) => {
        setLanguagePacks((prev: any) => {
          return { ...prev, [doc.id]: doc.data() };
        });
      });
    };
    getLanguagePacks();
  }, []);

  return languagePacks;
};
