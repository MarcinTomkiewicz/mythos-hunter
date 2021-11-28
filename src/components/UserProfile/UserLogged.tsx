import { FunctionComponent, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { BsChevronDown } from "react-icons/bs";
import profilePic from "../../img/profile.png";
import Dropdown from "./Dropdown";

const UserLogged: FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = useUser();
  return (
    <div className="user-profile__logged">
      <img src={profilePic} alt="" />
      <div className="user-profile__details">
        <span className="user-profile__credentials">{user?.name}</span>
        <span className="user-profile__credentials">Poziom: {user?.level}</span>
      </div>
      <BsChevronDown
        style={{
          marginLeft: "1rem",
          transform: isDropdownOpen ? "rotate(180deg)" : "",
          cursor: "pointer",
          transformOrigin: "center",
          transition: "all .2s",
        }}
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      />
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </div>
  );
};

export default UserLogged;
