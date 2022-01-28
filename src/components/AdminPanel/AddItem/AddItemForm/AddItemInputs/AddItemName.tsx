interface AddItemNameProps {
  itemName: string;
  itemNameLang: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemName = ({
  itemName,
  itemNameLang,
  handleChange,
}: AddItemNameProps) => {
  return (
    <>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        {itemNameLang === "itemName" ? "Nazwa:" : "Nazwa angielska:"}
        <input
          type="text"
          name={itemNameLang}
          value={itemName}
          onChange={handleChange}
          style={{ width: "110px" }}
        />
      </div>
    </>
  );
};
