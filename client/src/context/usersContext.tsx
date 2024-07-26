import React, {
  createContext,
  useState,
  ReactNode,
  ReactElement,
  useEffect,
} from "react";

import { User } from "../types/types";
import { fetchUsers } from "../api/usersApi";

interface UsersContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const defaultContextValue: UsersContextType = {
  users: [],
  setUsers: () => {},
};

export const UsersContext =
  createContext<UsersContextType>(defaultContextValue);

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({
  children,
}: UsersProviderProps): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchedUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    fetchedUsers();
  }, []);


  const value = {
    users,
    setUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
