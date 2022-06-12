import { render, screen } from "@testing-library/react";
import { Home } from ".";

test("HomePage", () => {
  render(<Home />);
  const screenText = screen.getByText(/home page/);
  expect(screenText.textContent).toBe("This is the home page.");
});
