import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

interface AddItemGenderProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddItemGender = ({ handleChange }: AddItemGenderProps) => {
  return (
<>
<FormLabel id="demo-row-radio-buttons-group-label">Rodzaj</FormLabel>
    <RadioGroup
    aria-labelledby="gender"
    defaultValue="none"
    name="gender"
    row
    onChange={handleChange}
  >
    <FormControlLabel value="female" control={<Radio />} label="żeński" />
    <FormControlLabel value="male" control={<Radio />} label="męski" />
  </RadioGroup>

    {/* <div style={{paddingLeft: "10px", paddingRight: "10px"}}>
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
    </div> */}
    </>
  );
};
