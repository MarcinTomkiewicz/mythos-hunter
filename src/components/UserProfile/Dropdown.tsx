import React, { FunctionComponent } from "react";
import { auth } from "../../config/firebaseConfig";
import { useLanguageSettings } from "../../hooks/useLanguageSettings";
import { useLanguagePacks } from "../../hooks/useLanguagePacks";
import ClickAwayListener from "@mui/material/ClickAwayListener";

interface DropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const languagePacks = useLanguagePacks();
  const langCode = useLanguageSettings();
  if (!isDropdownOpen) {
    return null;
  }
  const handleClickAway = () => {
    setIsDropdownOpen(false);
  };
  const handleLogout = () => {
    auth.signOut();
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="dropdown">
        <ul className="dropdown__list">
          <li className="dropdown__item">
            {languagePacks.labels?.profile[langCode]}
          </li>
          <li onClick={handleLogout} className="dropdown__item">
            {languagePacks.labels?.log_out[langCode]}
          </li>
        </ul>
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
