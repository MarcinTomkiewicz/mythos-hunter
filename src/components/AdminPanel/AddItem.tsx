import { useState } from "react";
import { useGetItemCategories } from "../../hooks/useGetItemCategories";
import { AddItemForm } from "./AddItem/AddItemForm/AddItemForm";
import { SelectCategory } from "./AddItem/SelectCategory";

export const AddItem = () => {

  const itemCategories: string[] = useGetItemCategories();
  const [itemCategory, setItemCategory] = useState<string | any>("");

  const handleSelection = (e: any) => {
    e.preventDefault();
    return setItemCategory(<AddItemForm itemType={e.target.value} />);
  };

  return (
    <>
      <SelectCategory
        itemTypes={itemCategories}
        handleSelection={handleSelection}
      />
      {itemCategory}
    </>
  );
};
