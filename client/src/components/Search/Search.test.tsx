import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Search from "./Search";
import searchIcon from "../../assets/search.svg";

describe("Search Component", () => {
  it("renders search input and button with icon", () => {
    render(<Search onSearch={() => {}} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();

    // Check if the search icon is rendered
    const icon = screen.getByRole("img", { name: /search/i });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", searchIcon);
  });

  it("calls onSearch with the input value when changed", () => {
    const mockOnSearch = vi.fn();

    render(<Search onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "John" } });

    expect(mockOnSearch).toHaveBeenCalledWith("John");
  });

  it("displays the search icon with correct src attribute", () => {
    render(<Search onSearch={() => {}} />);

    const icon = screen.getByRole("img", { name: /search/i });
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("src", searchIcon);
  });
});
