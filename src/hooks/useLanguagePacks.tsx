import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
  const [languages, setLanguages] = useState<any>({});
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

  const [tempLanguage, setTempLanguage] = useState([]);

  useEffect(() => {
    const tempLanguageArray: any = [];

    packNames.forEach((document, i) => {
      const getLanguages = async () => {
        const docRef = doc(db, "language_packs", document);
        const docSnap = await getDoc(docRef);

        tempLanguageArray.push([document, docSnap.data()]);

        setTempLanguage(tempLanguageArray);
      };
      getLanguages();
    });
  }, [packNames]);

  const languageObject = Object.fromEntries(tempLanguage);

  return languageObject;
};
