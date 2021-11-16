import React, { useState } from "react";
import { AddItemName } from "./addItemInputs/AddItemName";
import { AddItemValue } from "./addItemInputs/AddItemValue";

interface AddItemFormProps {
  itemType: string
}

interface itemTypes {
  itemName: string,
  itemValue: string,
  itemLowDmg: number,
  itemUppDmg: number,
  itemDmg: number,
  gender: string,
  error: string,  
}

export const AddItemForm = ({ itemType }: AddItemFormProps) => {
  const [item, setItem] = useState<itemTypes>({
    itemName: "",
    itemValue: "0",
    itemLowDmg: 0,
    itemUppDmg: 0,
    itemDmg: 0,
    gender: "",
    error: ""
  });

  let { itemName, itemValue, itemLowDmg, itemUppDmg, itemDmg } = item;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

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
      <form name="handWeapon" onSubmit={handleSubmit}>
        <AddItemName itemName={itemName} handleChange={handleChange} />
        <AddItemValue itemValue={itemValue} handleChange={handleChange} />
        {/* <div>
          Nazwa:{" "}
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleChange}
          />
        </div> */}
        {/* <div>
          Wartość:{" "}
          <input
            type="number"
            name="itemValue"
            value={itemValue}
            onChange={handleChange}
          />
        </div> */}
        <div>
          Rodzaj: <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
          męski
          <input type="radio" name="gender" value="female" id="female" onChange={handleChange}/>
          żeński
        </div>
        <div>
          Obrażenia dolne:{" "}
          <input
            type="number"
            name="itemLowDmg"
            value={itemLowDmg}
            onChange={handleChange}
          />
        </div>
        <div>
          Obrażenia górne:{" "}
          <input
            type="number"
            name="itemUppDmg"
            value={itemUppDmg}
            onChange={handleChange}
          />
        </div>
        <div>
          Obrażenia:{" "}
          <input
            type="number"
            name="itemDmg"
            value={itemDmg}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Wyślij</button>
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
