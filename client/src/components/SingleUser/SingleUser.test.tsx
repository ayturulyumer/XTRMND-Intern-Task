// SingleUser.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SingleUser from "./SingleUser";
import { User } from "../../types/types";
import PhoneIcon from "../../assets/phone.svg";
import WebsiteIcon from "../../assets/website.svg";
import CityIcon from "../../assets/city.svg";
import EmailIcon from "../../assets/email.svg";

const mockUser: User = {
  id: 1,
  name: "John Doe",
  username: "johndoe",
  email: "john@example.com",
  address: {
    street: "Main St",
    suite: "Apt. 1",
    city: "Somewhere",
    zipcode: "12345",
    geo: {
      lat: "0",
      lng: "0",
    },
  },
  phone: "123-456-7890",
  website: "johndoe.com",
  company: {
    name: "John Doe Inc.",
    catchPhrase: "We do things",
    bs: "business stuff",
  },
};

describe("SingleUser", () => {
  it("renders icons with correct src attributes", () => {
    render(
      <table>
        <tbody>
          <SingleUser
            user={mockUser}
            isOpen={true}
            toggleAccordion={() => {}}
          />
        </tbody>
      </table>
    );

    // Check if the icons have the correct src attribute
    expect(screen.getByAltText("Phone")).toHaveAttribute("src", PhoneIcon);
    expect(screen.getByAltText("City")).toHaveAttribute("src", CityIcon);
    expect(screen.getByAltText("Website")).toHaveAttribute("src", WebsiteIcon);
    expect(screen.getByAltText("Email")).toHaveAttribute("src", EmailIcon);
  });

  it("renders main user details", () => {
    render(
      <SingleUser user={mockUser} isOpen={false} toggleAccordion={() => {}} />
    );

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
    expect(screen.getByText("John Doe Inc.")).toBeInTheDocument();
  });

  it("toggles accordion to show additional user details", () => {
    const toggleAccordion = vi.fn();
    const { rerender } = render(
      <SingleUser
        user={mockUser}
        isOpen={false}
        toggleAccordion={toggleAccordion}
      />
    );

    fireEvent.click(screen.getByText("1"));
    expect(toggleAccordion).toHaveBeenCalled();

    rerender(
      <SingleUser
        user={mockUser}
        isOpen={true}
        toggleAccordion={toggleAccordion}
      />
    );

    expect(screen.getByText("123-456-7890")).toBeInTheDocument();
    expect(screen.getByText("Somewhere,Main St,Apt. 1")).toBeInTheDocument();
    expect(screen.getByText("johndoe.com")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });
});
