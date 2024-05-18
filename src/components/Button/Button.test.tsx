import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("renders button with text", () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
