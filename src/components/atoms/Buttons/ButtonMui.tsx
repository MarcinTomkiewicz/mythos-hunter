import { AlertColor } from "@mui/material";
import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

interface ButtonMuiProps {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  color?: AlertColor;
}

const ButtonMui: FunctionComponent<ButtonMuiProps> = ({
  text,
  onClick,
  isDisabled = false,
  color = "info",
}) => {
  if (!isDisabled) {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        size="large"
        color={color}
        className="btn-mui"
      >
        {text}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        size="large"
        color={color}
        style={{ cursor: "not-allowed" }}
        className="btn-mui"
        disabled
      >
        {text}
      </Button>
    );
  }
};

export default ButtonMui;
