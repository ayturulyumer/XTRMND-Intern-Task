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
  error: string | null;
}

const defaultContextValue: UsersContextType = {
  users: [],
  setUsers: () => {},
  loading: false,
  error: null,
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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchedUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchedUsers();
  }, []);

  const value = {
    users,
    setUsers,
    loading,
    error
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
