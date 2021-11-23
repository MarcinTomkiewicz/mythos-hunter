interface AddItemGenderProps {
  // itemValue: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemGender = ({ handleChange }: AddItemGenderProps) => {
  return (
    <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
      Rodzaj:{" "}
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        onChange={handleChange}
      />
      męski
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        onChange={handleChange}
      />
      żeński
    </div>
  );
};
