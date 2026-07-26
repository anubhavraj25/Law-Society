import React from "react";

const FAQ = () => {
  return (
    <>
      <div className="faq_sec">
        <h2 className=" text-center text-white">Frequently Asked Question</h2>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-sm font-semibold">
            What is Law Society and what services do you offer?
          </div>
          <div className="collapse-content bg-white text-xs">
            <p className=" mt-3">
              Law Society is a professional legal consultancy providing expert
              advice, legal representation, and educational resources to
              individuals and businesses. We specialize in legal compliance,
              advocacy, and legal education.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-sm font-medium">
            Do you offer free legal advice?
          </div>
          <div className="collapse-content bg-white text-xs">
            <p className=" mt-3">
              We offer a free initial consultation to understand your case.
              Based on the discussion, we’ll guide you on the next steps and
              associated costs if applicable.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-300 mb-4">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-sm font-medium">
            Can Law Society help with business legal compliance?
          </div>
          <div className="collapse-content bg-white text-xs">
            <p className=" mt-3">
              Absolutely. We offer tailored legal support for startups, SMEs,
              and corporations to ensure compliance with business, labor, and
              corporate laws.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
