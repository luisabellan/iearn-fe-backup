import { useContext } from "react";

import { UserContext } from "../context/user-context";

const useAuthentication = () => {
  const { user, setUser } = useContext(UserContext);
  return {
    user,
    setUser,
  };
};

export default useAuthentication;
