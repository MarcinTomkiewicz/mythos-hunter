import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, doc, getDoc, getDocs } from "firebase/firestore";

export const useLanguagePacks = () => {
    
    const q = query(collection(db, "language_packs"));
    const [languages, setLanguages] = useState({});
    
    getDocs(q).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
        console.log(15, doc.id);
        let docRef = doc(db, "language_packs", `${doc.id}`)
        })
    });
    // useEffect(() => {
    //     getDocs(q).then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         setLanguages(doc.data());
    //       });
    //     });
    // }, [q]);
    return languages;
}

//const querySnapshot = await 