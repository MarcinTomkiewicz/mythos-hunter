import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

interface ButtonBlueProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const ButtonBlue: FunctionComponent<ButtonBlueProps> = ({
  text,
  onClick,
  isDisabled = false,
}) => {
  if (!isDisabled) {
    return (
      <Button
        variant="contained"
        size="large"
        style={{ fontSize: "12px", fontFamily: "inherit" }}
        onClick={onClick}
      >
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        size="large"
        className="btn-blue"
        onClick={onClick}
        disabled
      >
        {text}
      </Button>
    );
  }
};

export default ButtonBlue;
