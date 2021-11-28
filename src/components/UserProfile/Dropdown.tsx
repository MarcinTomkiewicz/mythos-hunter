import React, { FunctionComponent } from "react";
import { auth } from "../../config/firebaseConfig";

interface DropdownProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown: FunctionComponent<DropdownProps> = ({
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  if (!isDropdownOpen) {
    return null;
  }
  const handleLogout = () => {
    auth.signOut();
    setIsDropdownOpen((prev) => !prev);
  };
  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        <li className="dropdown__item">Profil</li>
        <li onClick={handleLogout} className="dropdown__item">
          Wyloguj
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
