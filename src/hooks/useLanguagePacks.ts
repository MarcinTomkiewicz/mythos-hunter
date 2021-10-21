import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
  interface PackObject {
    [key:string]: string[];
  }
  const [languagePacks, setLanguagePacks] = useState<any>({})
  const [packNames, setPackNames] = useState<string[]>([]);
  const [tempLanguage, setTempLanguage] = useState<any[]>([]);
  

useEffect(() => {

    const getPackNames = async () => {
      const q = query(collection(db, "language_packs"));
      const testArray: string[] = [];
      const documents = await getDocs(q);
      documents.docs.forEach((doc) => {
        testArray.push(doc.id);
      });
      setPackNames(testArray)
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
        setLanguagePacks(Object.fromEntries(tempLanguageArray))  
      };
      
      getLanguagesFromDB();
      
    })
  
}, [packNames])

console.log(languagePacks);

  

  // useEffect(() => {
  //   const tempLanguageArray: any = [];

  //   packNames.forEach((document) => {
  //     const getLanguagesFromDB = async () => {
  //       const docRef = doc(db, "language_packs", document);
  //       const docSnap = await getDoc(docRef);

  //       tempLanguageArray.push([document, docSnap.data()]);
  //     };
  //     getLanguagesFromDB();
  //     setTempLanguage(tempLanguageArray);
  //   });
  // }, [packNames]);

  // useEffect(() => {
  //   if (tempLanguage.length === 0) {
  //     console.log("coś");
  //     console.log(42, tempLanguage);
      
  //     return;
  //   } else {
  //     console.log(46, tempLanguage);
  //     return setLanguages(Object.fromEntries(tempLanguage));
  //   }
  // }, [tempLanguage]);

  // console.log(languages);

  return languagePacks;
};
