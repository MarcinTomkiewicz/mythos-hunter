import { FunctionComponent, useState } from "react";
import TopBar from "../atoms/TopBar/TopBar";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { AddItem } from "./AddItem";
import { ManagePlayer } from "./ManagePlayer/ManagePlayer";

interface componentModulesTypes {
  addItem: JSX.Element,
  managePlayer: JSX.Element
}

const AdminPanel: FunctionComponent = () => {
  const language = useLanguagePacks();
  const langCode = useLanguageSettings();

  const [moduleUsed, setModuleUsed] = useState<any>(<ManagePlayer />)

const componentModules: componentModulesTypes = {
    addItem: <AddItem />,
    managePlayer: <ManagePlayer />
}

  return (
    <>
      <TopBar title={language.headers?.admin_panel[langCode]} />
      <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item"><button className="navigation__item" value="addItem" onClick={() => {setModuleUsed(componentModules.addItem)}}>{language.labels?.add_item[langCode]}</button></li>
        <li className="navigation__item"><button className="navigation__item" value="managePlayer" onClick={() => {setModuleUsed(componentModules.managePlayer)}}>{language.labels?.manage_player[langCode]}</button></li>
        </ul>
        </nav>
        {moduleUsed}
    </>
  );
};

export default AdminPanel;
