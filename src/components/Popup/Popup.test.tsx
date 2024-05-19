import { fireEvent, render, screen } from "@testing-library/react";
import { Popup } from ".";

describe("ui popup", () => {
  const text = "Hello, my Popup";
  const title = <h2>{text}</h2>;
  it("should render popup", () => {
    render(
      <Popup onClosing={() => {}} isOpen={true}>
        {title}
      </Popup>,
    );

    const popupContent = screen.getByText(text);
    expect(popupContent).toBeInTheDocument();
  });
  it("should don't render popup", () => {
    render(
      <Popup onClosing={() => {}} isOpen={false}>
        {title}
      </Popup>,
    );

    const popupContent = screen.queryByText(text);
    expect(popupContent).not.toBeInTheDocument();
  });
  it("should call onClosing when popup is closed", () => {
    const mockFunc = jest.fn();
    render(
      <Popup onClosing={mockFunc} isOpen={true}>
        {title}
      </Popup>,
    );
    const popup = screen.getByTestId("popup");
    fireEvent.click(popup);
    expect(mockFunc).toHaveBeenCalled();
  });
});
