import { User } from "../types/types";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${baseUrl}/users`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: User[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch users", error);
    return [];
  }
};
