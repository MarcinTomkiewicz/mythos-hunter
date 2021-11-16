import { FunctionComponent } from "react";
import { useUser } from "../../hooks/useUser";
import Logout from "../LoginAndRegistration/Logout";

const UserLogged: FunctionComponent = () => {
  
  const user=useUser()

  return (
  <>
  <div className="user-profile__logged">Witaj {user?.name}</div>
  <div className="user-profile__logged"><Logout /></div>
  </>
  )
};

export default UserLogged;
