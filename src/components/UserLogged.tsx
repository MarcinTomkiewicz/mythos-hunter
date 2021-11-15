import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useLanguagePacks } from "../hooks/useLanguagePacks";
import { Logout } from "./LoginAndRegistration/Logout";

export const UserLogged = () => {
  const user = useUser();
  const language = useLanguagePacks();
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);
  const toggleIsDropdownOpen = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  return (
    <div className="user-profile">
      <img
        className="user-profile__pic"
        alt=""
        src="https://randomuser.me/api/portraits/men/11.jpg"
      />
      <div className="user-profile__credentials">
        <span className="user-profile__usernane">{user?.name}</span>
        <span className="user-profile__email">
          {language.labels?.level[0]}: {user?.level}
        </span>
      </div>
      <BsChevronDown
        onClick={toggleIsDropdownOpen}
        className="menu-icon"
        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "" }}
      />
      <div
        className="dropdown"
        style={{ display: isDropdownOpen ? "block" : "none" }}
      >
        <ul className="dropdown__list">
          <li className="dropdown__item">{language.labels?.profile[0]}</li>
          <li className="dropdown__item">
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};
