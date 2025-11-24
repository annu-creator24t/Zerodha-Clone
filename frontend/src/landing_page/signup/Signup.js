import React, { useState } from "react";

import HeroSection from "./HeroSection";
import InvestmentOptions from "./InvestmentOptions";
import StepsSection from "./StepsSection";
import BenefitsSection from "./BenefitsSection";
import AccountTypes from "./AccountTypes";
import FAQSection from "./FAQSection";
import OpenAccount from "../OpenAccount"; 

function SignupPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full antialiased text-gray-900 font-sans">
      <HeroSection />
      <InvestmentOptions />
      <StepsSection />
      <BenefitsSection />
      <AccountTypes />
      <FAQSection openFAQ={openFAQ} setOpenFAQ={setOpenFAQ} />
      <OpenAccount />
    </div>
  );
}

export default SignupPage;
