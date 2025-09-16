// src/components/EmployersWorkflow/index.jsx
import React from "react";
import DesktopWorkflow from "./DesktopWorkflow";
import MobileWorkflow from "./MobileWorkflow";

const EmployersWorkflow = () => {
  return (
    <>
      <DesktopWorkflow />
      <MobileWorkflow />
    </>
  );
};

export default EmployersWorkflow;
