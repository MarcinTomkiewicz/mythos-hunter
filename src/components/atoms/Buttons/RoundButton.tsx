import { FunctionComponent } from "react";
import Icon from "@mui/material/Icon";
import { AlertColor } from "@mui/material";

interface RoundButtonProps {
  iconName: string;
  onClick: () => void;
  color: AlertColor;
}

const RoundButton: FunctionComponent<RoundButtonProps> = ({
  iconName,
  onClick,
  color,
}) => {
  return (
    <button className="btn-round" onClick={onClick}>
      <Icon color={color} style={{ fontSize: "22px" }}>
        {iconName}
      </Icon>
    </button>
  );
};

export default RoundButton;
