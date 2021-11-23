interface AddItemUppDmgProps {
  itemUppDmg: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemUppDmg = ({
  itemUppDmg,
  handleChange,
}: AddItemUppDmgProps) => {
  return (
    <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
      Obrażenia górne:{" "}
      <input
        type="number"
        style={{width: "40px"}}
        name="itemUppDmg"
        value={itemUppDmg}
        onChange={handleChange}
      />
    </div>
  );
};
