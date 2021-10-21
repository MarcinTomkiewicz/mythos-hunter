import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
  const [languagePacks, setLanguagePacks] = useState<any>({});
  const [packNames, setPackNames] = useState<string[]>([]);

  useEffect(() => {
    const getPackNames = async () => {
      const q = query(collection(db, "language_packs"));
      const testArray: string[] = [];
      const documents = await getDocs(q);
      documents.docs.forEach((doc) => {
        testArray.push(doc.id);
      });
      setPackNames(testArray);
    };
    getPackNames();
  }, []);

  useEffect(() => {
    const tempLanguageArray: any = [];
    packNames.forEach((document) => {
      const getLanguagesFromDB = async () => {
        const docRef = doc(db, "language_packs", document);
        const docSnap = await getDoc(docRef);
        tempLanguageArray.push([document, docSnap.data()]);
        setLanguagePacks(Object.fromEntries(tempLanguageArray));
      };

      getLanguagesFromDB();
    });
  }, [packNames]);

  return languagePacks;
};
