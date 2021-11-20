import { FunctionComponent } from "react";
import LeftPanelBox from "./LeftPanelBox";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";

const LeftPanel: FunctionComponent = () => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  return (
    <div className="left-panel">
      <LeftPanelBox title={languagePacks.headers?.user_statistics[langCode]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quas
        sit id doloribus. Nesciunt assumenda unde illo commodi reiciendis atque
        dicta obcaecati sapiente iure iste, amet officiis quibusdam ex totam.
      </LeftPanelBox>
      <LeftPanelBox
        title={languagePacks.headers?.resources_and_others[langCode]}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ipsa
        aliquid recusandae architecto, libero eius nulla soluta quo unde rem
        quia atque illo debitis aspernatur veniam nihil ipsum deserunt iste?
      </LeftPanelBox>
    </div>
  );
};

export default LeftPanel;
