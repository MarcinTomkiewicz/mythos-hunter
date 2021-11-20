import { FunctionComponent } from "react";

interface TopBarProps {
  title: string;
}

const TopBar: FunctionComponent<TopBarProps> = ({ title }) => {
  return <div className="top-bar">{title}</div>;
};

export default TopBar;
