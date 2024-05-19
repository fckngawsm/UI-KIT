import { render, screen } from "@testing-library/react";
import { Popup } from ".";

describe("ui popup", () => {
  const text = "Hello, my Popup";
  const title = <h2>{text}</h2>;
  it("should render popup", () => {
    render(<Popup isOpen={true}>{title}</Popup>);

    const popupContent = screen.getByText(text);
    expect(popupContent).toBeInTheDocument();
  });
  it("should don't render popup", () => {
    render(<Popup isOpen={false}>{title}</Popup>);

    const popupContent = screen.queryByText(text);
    expect(popupContent).not.toBeInTheDocument();
  });
});
