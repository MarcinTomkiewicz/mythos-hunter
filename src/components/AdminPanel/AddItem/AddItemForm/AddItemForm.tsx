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

interface AddItemFormProps {
  itemType: string;
}

interface itemTypes {
  itemName: string;
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

  let { itemName, itemValue, itemLowDmg, itemUppDmg, itemDmg, luck } = item;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      error: "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(item);
  };

  if (itemType.includes("hand")) {
    return (
      <form
        name="handWeapon"
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
          <AddItemName itemName={itemName} handleChange={handleChange} />
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
          <AddItemLowDmg itemLowDmg={itemLowDmg} handleChange={handleChange} />
          <AddItemUppDmg itemUppDmg={itemUppDmg} handleChange={handleChange} />
          <AddItemDmg itemDmg={itemDmg} handleChange={handleChange} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap"}}>
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
      </form>
    );
  } else {
    return (
      <div>
        {itemType !== ""
          ? `Formularz dla ${itemType}`
          : "Nie wybrano formularza"}
      </div>
    );
  }
};
