import { useEffect, useState } from "react";
import Logout from "../components/LoginAndRegistration/Logout";
import Registration from "../components/LoginAndRegistration/Registration";
import Login from "../components/LoginAndRegistration/Login";
import { useUser } from "./useUser";

export const useRouter = () => {
  const user = useUser();
  const [currentRouter, setCurrentRouter] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (user === null) {
      setCurrentRouter([<Login />, <Registration />]);
    } else {
      setCurrentRouter([<Logout />]);
    }
  }, [user]);
  return currentRouter;
};
