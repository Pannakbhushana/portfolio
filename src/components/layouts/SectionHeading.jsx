import React from "react";

const SectionHeading = ({ children, className = "" }) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-serif font-semibold text-[#8A3B12] mb-6 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
