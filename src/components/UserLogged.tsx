import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";

export const UserLogged = () => {
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
        <span className="user-profile__usernane">Test</span>
        <span className="user-profile__email">test666@gmail.com</span>
      </div>
      <BsChevronDown
        onClick={toggleIsDropdownOpen}
        className="menu-icon"
        style={{ transform: isDropdownOpen ? "rotate(180deg)" : "" }}
      />
    </div>
  );
};
