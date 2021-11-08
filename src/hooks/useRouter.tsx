import { useEffect, useState } from "react";
import { Logout } from "../components/auth/Logout";
import { Registration } from "../components/auth/Registration";
import { Login } from "../components/auth/Login";
import { useUser } from "./useUser";

export const useRouter = () => {
  const user = useUser();
  const [currentRouter, setCurrentRouter] = useState<any[]>([]);

  useEffect(() => {
    if (user === null) {
      setCurrentRouter([<Login />, <Registration />]);
    } else {
      setCurrentRouter([<Logout />]);
    }
  }, [user]);
  return currentRouter;
};
