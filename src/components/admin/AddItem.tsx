import { useState } from "react";
import { useGetItemCategories } from "../../hooks/useGetItemCategories";
import { AddItemForm } from "./addItem/addItemForm/AddItemForm";
import { SelectCategory } from "./addItem/SelectCategory";

export const AddItem = () => {
  const itemCategories: string[] = useGetItemCategories();
  const [itemCategory, setItemCategory] = useState<string>("")

    const handleSelection = (e: any) => {
        e.preventDefault();
        return setItemCategory(e.target.value);
    }

  return (
      <>
  <SelectCategory itemTypes={itemCategories} handleSelection={handleSelection}/>
  <AddItemForm itemType={itemCategory}/>
  </>
  )
};

