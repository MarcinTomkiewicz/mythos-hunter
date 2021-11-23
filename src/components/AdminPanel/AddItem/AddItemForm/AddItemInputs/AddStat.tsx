interface AddItemStatProps {
  itemStat: string;
  itemStatShort: string;
  itemStatName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddStat = ({
  itemStat,
  itemStatShort,
  itemStatName,
  handleChange,
}: AddItemStatProps) => { 

  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
      {itemStatName}:{" "}
      <input
        type="number"
        style={{width: "40px"}}
        name={itemStatShort}
        value={itemStat}
        onChange={handleChange}
      />
    </div>
  );
};
