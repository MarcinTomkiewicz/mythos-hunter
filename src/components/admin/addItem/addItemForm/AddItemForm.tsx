import { useState } from "react";
import { GiChoice } from "react-icons/gi";

export const AddItemForm = ({ itemType }: any) => {
  const [item, setItem] = useState<any>({
    itemName: "",
    itemValue: 0,
    itemLowDmg: 0,
    itemUppDmg: 0,
    itemDmg: 0,
    gender: "",
  });

  let { itemName, itemValue, itemLowDmg, itemUppDmg, itemDmg } = item;

  const handleChange = (e: any) => {

    setItem({
      ...item,
      [e.target.name]: e.target.value,
      error: "",
    });
    return item;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(item);
  };

  if (itemType.includes("hand")) {
    return (
      <form name="handWeapon" onSubmit={handleSubmit}>
        <div>
          Nazwa:{" "}
          <input
            type="text"
            name="itemName"
            value={itemName}
            onChange={handleChange}
          />
        </div>
        <div>
          Wartość:{" "}
          <input
            type="number"
            name="itemValue"
            value={itemValue}
            onChange={handleChange}
          />
        </div>
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
