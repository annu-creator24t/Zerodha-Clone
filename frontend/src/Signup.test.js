import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "./landing_page/signup/Signup";

// ---- MOCK ALL CHILD COMPONENTS ----
jest.mock("./landing_page/signup/HeroSection", () => () => <div>HeroSection Component</div>);
jest.mock("./landing_page/signup/InvestmentOptions", () => () => <div>InvestmentOptions Component</div>);
jest.mock("./landing_page/signup/StepsSection", () => () => <div>StepsSection Component</div>);
jest.mock("./landing_page/signup/BenefitsSection", () => () => <div>BenefitsSection Component</div>);
jest.mock("./landing_page/signup/AccountTypes", () => () => <div>AccountTypes Component</div>);
jest.mock("./landing_page/signup/FAQSection", () => (props) => (
  <div>FAQSection Component - openFAQ: {props.openFAQ === null ? "null" : props.openFAQ}</div>
));

jest.mock("./landing_page/OpenAccount", () => () => <div>OpenAccount Component</div>);

// ---- TESTS ----
describe("Signup Page", () => {

  test("renders all Signup sections", () => {
    render(<Signup />);

    expect(screen.getByText("HeroSection Component")).toBeInTheDocument();
    expect(screen.getByText("InvestmentOptions Component")).toBeInTheDocument();
    expect(screen.getByText("StepsSection Component")).toBeInTheDocument();
    expect(screen.getByText("BenefitsSection Component")).toBeInTheDocument();
    expect(screen.getByText("AccountTypes Component")).toBeInTheDocument();
    expect(screen.getByText("OpenAccount Component")).toBeInTheDocument();
  });

  test("FAQSection receives default prop openFAQ = null", () => {
    render(<Signup />);
    expect(screen.getByText("FAQSection Component - openFAQ: null")).toBeInTheDocument();
  });

});
