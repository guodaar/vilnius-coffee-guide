import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card component", () => {
  it("renders correctly", () => {
    render(<Card shopName="Test Shop" image="test.jpg" id="1" />);
    const title = screen.getByText("Test Shop");
    const button = screen.getByText("See more");

    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
