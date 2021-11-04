import { useEffect, useState } from "react";
import { Logout } from "../auth/Logout";
import { Registration } from "../auth/Registration";
import { Login } from "../auth/Login";
import { useUser } from "./useUser";

export const useRouter = () => {
  const user = useUser();
  const [currentRouter, setCurrentRouter] = useState<any[]>([]);

  useEffect(() => {
    const userRouter = [<Logout />];
    const nonUserRouter = [<Login />, <Registration />];
    if (user === null) {
      setCurrentRouter(nonUserRouter);
    } else {
      setCurrentRouter(userRouter);
    }
  }, [user]);
  return currentRouter;
};
