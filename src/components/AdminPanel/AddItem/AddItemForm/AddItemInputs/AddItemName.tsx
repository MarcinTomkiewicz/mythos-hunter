interface AddItemNameProps {
  itemName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemName = ({ itemName, handleChange }: AddItemNameProps) => {
  return (
    <>
      <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
        Nazwa:{" "}
        <input
          type="text"
          name="itemName"
          value={itemName}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
