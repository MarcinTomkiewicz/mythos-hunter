import { FunctionComponent } from "react";

const UserNotLogged: FunctionComponent = () => {
  return (
    <div className="user-profile__not-logged">
      <button className="btn btn--ghost">Zaloguj</button>
      <button className="btn btn--full">Zarejestruj</button>
    </div>
  );
};

export default UserNotLogged;
