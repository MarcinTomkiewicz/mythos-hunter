import { FunctionComponent } from "react";
import TopBar from "../atoms/TopBar/TopBar";

interface LeftPanelBoxProps {
  title: string;
}

const LeftPanelBox: FunctionComponent<LeftPanelBoxProps> = ({
  children,
  title,
}) => {
  return (
    <>
      <TopBar title={title} />
      <div className="left-panel__box">{children}</div>
    </>
  );
};

export default LeftPanelBox;
