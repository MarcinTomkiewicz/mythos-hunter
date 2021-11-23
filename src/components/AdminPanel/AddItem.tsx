import { useState } from "react";
import { useGetItemCategories } from "../../hooks/useGetItemCategories";
// import { useLanguagePacks } from "../../hooks/useLanguagePacks";
// import { useLanguageSettings } from "../../hooks/useLanguageSettings";
// import { useUser } from "../../hooks/useUser";
import { AddItemForm } from "./AddItem/AddItemForm/AddItemForm";
import { SelectCategory } from "./AddItem/SelectCategory";

export const AddItem = () => {
  // const user = useUser();
  // const language = useLanguagePacks();
  // const langCode = useLanguageSettings();

  const itemCategories: string[] = useGetItemCategories();
  const [itemCategory, setItemCategory] = useState<string>("");

  const handleSelection = (e: any) => {
    e.preventDefault();
    return setItemCategory(e.target.value);
  };

  return (
    <>
      <SelectCategory
        itemTypes={itemCategories}
        handleSelection={handleSelection}
      />
      <AddItemForm itemType={itemCategory} />
    </>
  );
};
