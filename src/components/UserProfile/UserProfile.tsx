import { FunctionComponent } from "react";
import { useUser } from "../../hooks/useUser";
import UserLogged from "./UserLogged";
import UserNotLogged from "./UserNotLogged";

const UserProfile: FunctionComponent = () => {
  const user = useUser();
  return (
    <div className="user-profile">
      {user ? <UserLogged /> : <UserNotLogged />}
    </div>
  );
};

export default UserProfile;
