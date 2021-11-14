import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const useGetItemCategories = () => {
    const [itemCategories, setItemCategories] = useState<string[]>([]);

    useEffect(() => {
        const getItemCategories = async () => {
          const collectDataFromDB = query(collection(db, "items"));
          const dataFromDB: string[] = [];
          const documents = await getDocs(collectDataFromDB);
          documents.docs.forEach((document) => {
            dataFromDB.push(document.id);
          });
          setItemCategories(dataFromDB);
        };
        getItemCategories();
      }, []);

      return itemCategories;
}