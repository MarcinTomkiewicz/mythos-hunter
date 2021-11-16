interface AddItemValueProps {
    itemValue: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemValue = ({itemValue, handleChange}: AddItemValueProps) => {
  return (
    <div>
      Wartość:{" "}
      <input
        type="number"
        name="itemValue"
        value={itemValue}
        onChange={handleChange}
      />
    </div>
  );
};
