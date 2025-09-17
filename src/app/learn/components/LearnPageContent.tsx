"use client";

import React from 'react';
import SectionOne from "./SectionOne"; // Import SectionOne
import SectionTwo from "./SectionTwo"; // Import SectionTwo
import Footer from "../../components/Footer"; // Import Footer

const LearnPageContent = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Add SectionOne here */}
      <SectionOne />
      
      {/* Add SectionTwo here */}
      <SectionTwo />

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default LearnPageContent; 