import { FunctionComponent } from "react";
import LeftPanelBox from "./LeftPanelBox";

const LeftPanel: FunctionComponent = () => {
  return (
    <div className="left-panel">
      <LeftPanelBox title="Dołącz do walki">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas
        sit id doloribus. Nesciunt assumenda unde illo commodi reiciendis atque
        dicta obcaecati sapiente iure iste, amet officiis quibusdam ex totam.
      </LeftPanelBox>
      <LeftPanelBox title="Gracze online">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        aliquid recusandae architecto, libero eius nulla soluta quo unde rem
        quia atque illo debitis aspernatur veniam nihil ipsum deserunt iste?
      </LeftPanelBox>
    </div>
  );
};

export default LeftPanel;
