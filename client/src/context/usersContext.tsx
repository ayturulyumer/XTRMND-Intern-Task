import React, { createContext, useState, ReactNode, ReactElement } from "react";

import { User } from "../types/types";

interface UsersContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined
);

interface UsersProviderProps {
  children: ReactNode;
}

export const UsersProvider = ({
  children,
}: UsersProviderProps): ReactElement => {
  const [users, setUsers] = useState<User[]>([]);

  const value = {
    users,
    setUsers,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
