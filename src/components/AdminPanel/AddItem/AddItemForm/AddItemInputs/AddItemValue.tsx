interface AddItemValueProps {
    itemValue: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemValue = ({itemValue, handleChange}: AddItemValueProps) => {  
  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
      Wartość:{" "}
      <input
        type="number"
        name="itemValue"
        style={{width: "80px"}}
        value={itemValue}
        onChange={handleChange}
      />
    </div>
  );
};
