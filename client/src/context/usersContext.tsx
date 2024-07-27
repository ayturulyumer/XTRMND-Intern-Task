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
  loading: boolean;
}

const defaultContextValue: UsersContextType = {
  users: [],
  setUsers: () => {},
  loading: false,
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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchedUsers = async () => {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchedUsers();
  }, []);

  const value = {
    users,
    setUsers,
    loading,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
