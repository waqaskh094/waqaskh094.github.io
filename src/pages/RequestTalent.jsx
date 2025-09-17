import React from "react";
import ContactHero from "../components/ContactHero";
import RequestTalentForm from "../components/RequestTalentForm";

const RequestTalent = () => {
  return (
    <div>
      <div>
        <ContactHero />
      </div>
      
      <div className="pt-10 bg-gray-50 dark:bg-black">
        <RequestTalentForm />
      </div>
    </div>
  );
};

export default RequestTalent;
