interface AddItemDmgProps {
    itemDmg: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const AddItemDmg = ({itemDmg, handleChange}: AddItemDmgProps) => {
return (
  <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
    Obrażenia:{" "}
    <input
      type="number"
      style={{width: "40px"}}
      name="itemDmg"
      value={itemDmg}
      onChange={handleChange}
    />
  </div>
)
}