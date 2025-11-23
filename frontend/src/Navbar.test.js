import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./landing_page/Navbar";   // <-- CORRECT PATH
                                              
describe("Navbar Component", () => {
  test("renders logo", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const logo = screen.getByAltText("Zerodha Logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/media/images/logo.svg");
  });

  test("renders all navbar links", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /signup/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /pricing/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /support/i })).toBeInTheDocument();
  });

  test("navbar links have correct href routes", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByRole("link", { name: /signup/i })).toHaveAttribute("href", "/signup");
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute("href", "/about");
    expect(screen.getByRole("link", { name: /products/i })).toHaveAttribute("href", "/product");
    expect(screen.getByRole("link", { name: /pricing/i })).toHaveAttribute("href", "/pricing");
    expect(screen.getByRole("link", { name: /support/i })).toHaveAttribute("href", "/support");
  });

  test("renders mobile toggle button", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const toggler = screen.getByRole("button", { name: /toggle navigation/i });
    expect(toggler).toBeInTheDocument();
  });
});
