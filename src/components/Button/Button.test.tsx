import { render, screen } from "@testing-library/react";
import { Button } from "./index";

const text = "my ui button";

describe("ui button", () => {
  it("should render button with children text", () => {
    render(<Button>{text}</Button>);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should render button critical variant", () => {
    render(<Button variant="filled">{text}</Button>);

    const button = screen.getByText(text);

    expect(button).toHaveStyle("background-color: #6765F2");
    expect(button).toHaveStyle("color: #FFFFFF");
  });

  it("should render button with upper case text", () => {
    render(<Button textIsUpper>{text}</Button>);

    const button = screen.getByText(text);

    expect(button).toHaveStyle("text-transform: uppercase");
  });

  it("should render button without uppercase", () => {
    render(<Button textIsUpper={false}>{text}</Button>);

    const button = screen.getByText(text);

    expect(button).not.toHaveStyle("text-transform: uppercase");
  });
});
