// UserList.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import UserList from "./UserList";
import UsersContext from "../../context/usersContext";

// Mock UsersContext value including setUsers
const mockSetUsers = vi.fn();

// Mock context values for different states
const mockContextValueLoading = {
  users: [],
  loading: true,
  error: null,
  setUsers: mockSetUsers,
};

const mockContextValueError = {
  users: [],
  loading: false,
  error: "Something went wrong!",
  setUsers: mockSetUsers,
};

const mockContextValueNoUsers = {
  users: [],
  loading: false,
  error: null,
  setUsers: mockSetUsers,
};

const mockContextValueWithUsers = {
  users: [
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
    {
      id: 2,
      name: "Jane Smith",
      username: "janesmith",
      email: "jane@example.com",
      address: {
        street: "Second St",
        suite: "Apt. 2",
        city: "Elsewhere",
        zipcode: "54321",
        geo: { lat: "1", lng: "1" },
      },
      phone: "987-654-3210",
      website: "janesmith.com",
      company: {
        name: "Jane Smith LLC",
        catchPhrase: "We do things differently",
        bs: "more business stuff",
      },
    },
  ],
  loading: false,
  error: null,
  setUsers: mockSetUsers,
};

describe("UserList", () => {
  it('shows Spinner and "Please wait..." when loading is true', () => {
    render(
      <UsersContext.Provider value={mockContextValueLoading}>
        <UserList />
      </UsersContext.Provider>
    );

    expect(screen.getByRole("status")).toBeInTheDocument(); // Adjust if necessary
    expect(screen.getByText("Please wait...")).toBeInTheDocument();
  });

  it("displays error message when there is an error", () => {
    render(
      <UsersContext.Provider value={mockContextValueError}>
        <UserList />
      </UsersContext.Provider>
    );

    expect(screen.getByText("Something went wrong!")).toBeInTheDocument();
  });

  it('shows "No users found" when there are no filtered users', () => {
    render(
      <UsersContext.Provider value={mockContextValueNoUsers}>
        <UserList />
      </UsersContext.Provider>
    );

    expect(screen.getByText("No users found")).toBeInTheDocument();
  });

  it("filters and displays users based on search input", () => {
    render(
      <UsersContext.Provider value={mockContextValueWithUsers}>
        <UserList />
      </UsersContext.Provider>
    );

    // Initial state should show all users
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();

    // Simulate search input
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Jane" },
    });

    // After filtering, only Jane Smith should be visible
    expect(screen.queryByText("John Doe")).toBeNull();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });
});
