import React, { useEffect, useState } from "react";
import { AddItemGender } from "./AddItemInputs/AddItemGender";
import { AddItemLowDmg } from "./AddItemInputs/AddItemLowDmg";
import { AddItemUppDmg } from "./AddItemInputs/AddItemUppDmg";
import { AddItemName } from "./AddItemInputs/AddItemName";
import { AddItemValue } from "./AddItemInputs/AddItemValue";
import { AddItemDmg } from "./AddItemInputs/AddItemDmg";
import { useLanguagePacks } from "../../../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../../../hooks/useLanguageSettings";
import { AddStat } from "./AddItemInputs/AddStat";
import { db } from "../../../../config/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { Box } from "@mui/material";

interface AddItemFormProps {
  itemType: string;
}

interface itemTypes {
  itemName: string;
  itemNameEng: string;
  itemValue: string;
  itemLowDmg: string;
  itemUppDmg: string;
  itemDmg: string;
  str: string;
  agi: string;
  tough: string;
  vit: string;
  int: string;
  perc: string;
  speed: string;
  luck: string;
  gender: string;
  error: string;
}

export const AddItemForm = ({ itemType }: AddItemFormProps) => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();
  const [item, setItem] = useState<itemTypes>({
    itemName: "",
    itemNameEng: "",
    itemValue: "0",
    itemLowDmg: "0",
    itemUppDmg: "0",
    itemDmg: "0",
    str: "0",
    agi: "0",
    tough: "0",
    vit: "0",
    int: "0",
    perc: "0",
    speed: "0",
    luck: "0",
    gender: "",
    error: "",
  });

  const [statNames, setStatNames] = useState<string[]>([]);
  const [stats, setStats] = useState<string[]>([
    "str",
    "agi",
    "tough",
    "vit",
    "int",
    "perc",
    "speed",
  ]);

  const [names, setNames] = useState<string[]>([
    "itemName",
    "itemNameEng"
  ])

  useEffect(() => {
    const tempStatNames: string[] = [];
    stats.map((el) => {
      if (language.statistics !== undefined) {
        return tempStatNames.push(language.statistics[el][langCode]);
      } else {
        return "";
      }
    });
    setStatNames(tempStatNames);
  }, [language.statistics, langCode, stats]);

  let { itemName, itemNameEng, itemValue, itemLowDmg, itemUppDmg, itemDmg, luck } = item;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const addToDatabase = async (item: itemTypes) => {
    const nameOfItem = item.itemName;
    await updateDoc(doc(db, "items", itemType), {
      [nameOfItem]: item,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // addToDatabase(item);
    console.log(item, itemType);
    setItem({
      itemName: "",
      itemNameEng: "",
      itemValue: "0",
      itemLowDmg: "0",
      itemUppDmg: "0",
      itemDmg: "0",
      str: "0",
      agi: "0",
      tough: "0",
      vit: "0",
      int: "0",
      perc: "0",
      speed: "0",
      luck: "0",
      gender: "",
      error: "",
    });
  };

  if (itemType !== "none" && itemType !== "") {
    // console.log(itemType);
    
    return (
      <>
        <div style={{ textAlign: "center", fontSize: "25px" }}>
          Dodawanie {itemType}
        </div>
        <Box
          component="form"
          name={`${itemType}`}
          onSubmit={handleSubmit}
          style={{ display: "flex", flexFlow: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              paddingTop: "15px",
            }}
          >
      {names.length > 0
              ? names.map((el, i) => {
                  return (
                    <AddItemName
                      key={el}
                      itemName={item[el as keyof itemTypes]}
                      itemNameLang={el}
                      handleChange={handleChange}
                    />
                  );
                })
              : ""}
            <AddItemValue itemValue={itemValue} handleChange={handleChange} />
            <AddItemGender handleChange={handleChange} />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              paddingTop: "15px",
            }}
          >
            <AddItemLowDmg
              itemLowDmg={itemLowDmg}
              handleChange={handleChange}
            />
            <AddItemUppDmg
              itemUppDmg={itemUppDmg}
              handleChange={handleChange}
            />
            <AddItemDmg itemDmg={itemDmg} handleChange={handleChange} />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {statNames.length > 0
              ? stats.map((el, i) => {
                  return (
                    <AddStat
                      key={el}
                      itemStatShort={el}
                      itemStat={item[el as keyof itemTypes]}
                      itemStatName={statNames[i]}
                      handleChange={handleChange}
                    />
                  );
                })
              : ""}
          </div>
          <div>
            <AddStat
              itemStatShort="luck"
              itemStat={luck}
              itemStatName={language.statistics?.luck[langCode]}
              handleChange={handleChange}
            />
          </div>
          <div style={{ paddingTop: "10px", alignSelf: "center" }}>
            <button
              style={{
                padding: "5px",
                paddingLeft: "40px",
                paddingRight: "40px",
                border: "1px solid black",
              }}
              type="submit"
            >
              Wyślij
            </button>
          </div>
        </Box>
      </>
    );
  } else {
    return (
      <div style={{ textAlign: "center", fontSize: "25px" }}>
        Wybierz kategorię przedmiotu
      </div>
    );
  }
};
