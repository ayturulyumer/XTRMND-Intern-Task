import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { UsersProvider, UsersContext } from "./usersContext";
import { fetchUsers } from "../api/usersApi";
import { User } from "../types/types";
import React from "react";

// Mock fetchUsers API
vi.mock("../api/usersApi", () => ({
  fetchUsers: vi.fn(),
}));

// Example mock user data
const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "john@example.com",
    address: {
      street: "Main St",
      suite: "Apt. 1",
      city: "Somewhere",
      zipcode: "12345",
      geo: { lat: "0", lng: "0" },
    },
    phone: "123-456-7890",
    website: "johndoe.com",
    company: {
      name: "John Doe Inc.",
      catchPhrase: "We do things",
      bs: "business stuff",
    },
  },
];

const TestComponent = () => {
  const { users, loading, error } = React.useContext(UsersContext);

  return (
    <div>
      <div data-testid="user-list">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {users.length === 0 && !loading && !error && <p>No users available</p>}
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
describe("UsersContext", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sets users in context when users are fetched", async () => {
    (fetchUsers as vi.Mock).mockResolvedValue(mockUsers);

    render(
      <UsersProvider>
        <TestComponent />
      </UsersProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toHaveTextContent("John Doe");
    });
  });

  it("displays a loading state while users are being fetched", async () => {
    (fetchUsers as vi.Mock).mockImplementation(() => new Promise(() => {}));

    render(
      <UsersProvider>
        <TestComponent />
      </UsersProvider>
    );

    expect(screen.getByTestId("user-list")).toHaveTextContent("Loading...");
  });

  it("handles errors and sets error state in context", async () => {
    const errorMessage = "Failed to fetch users";

    (fetchUsers as vi.Mock).mockRejectedValue(new Error(errorMessage));

    render(
      <UsersProvider>
        <TestComponent />
      </UsersProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("user-list")).toHaveTextContent(
        `Error: ${errorMessage}`
      );
    });

    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });
});
