import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
  const [languagePacks, setLanguagePacks] = useState<any>({});
  const [packNames, setPackNames] = useState<string[]>([]);

  useEffect(() => {
    const getPackNames = async () => {
      const collectDataFromDB = query(collection(db, "language_packs"));
      const dataFromDB: string[] = [];
      const documents = await getDocs(collectDataFromDB);
      documents.docs.forEach((document) => {
        dataFromDB.push(document.id);
      });
      setPackNames(dataFromDB);
    };
    getPackNames();
  }, []);

  useEffect(() => {
    const languageArrays: any = [];
    packNames.forEach((document) => {
      const getLanguagesFromDB = async () => {
        const docRef = doc(db, "language_packs", document);
        const docSnap = await getDoc(docRef);
        languageArrays.push([document, docSnap.data()]);
        setLanguagePacks(Object.fromEntries(languageArrays));
      };
      getLanguagesFromDB();
    });
  }, [packNames]);

  return languagePacks;
};
