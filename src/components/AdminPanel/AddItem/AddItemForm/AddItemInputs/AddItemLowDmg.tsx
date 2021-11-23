interface AddItemLowDmgProps {
    itemLowDmg: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

export const AddItemLowDmg = ({itemLowDmg, handleChange}: AddItemLowDmgProps) => {
return (
  <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
    Obrażenia dolne:{" "}
    <input
      type="number"
      style={{width: "40px"}}
      name="itemLowDmg"
      value={itemLowDmg}
      onChange={handleChange}
    />
  </div>
)
}