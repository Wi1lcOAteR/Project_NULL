import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders the project heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Monorepo starter for React and NestJS/i
      })
    ).toBeInTheDocument();
  });
});
