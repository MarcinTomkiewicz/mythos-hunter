import { FunctionComponent } from "react";
import UserLogged from "./UserLogged";
import UserNotLogged from "./UserNotLogged";

const UserProfile: FunctionComponent = () => {
  const user = null;
  return (
    <div className="user-profile">
      {user ? <UserLogged /> : <UserNotLogged />}
    </div>
  );
};

export default UserProfile;
