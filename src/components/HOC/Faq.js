import React from "react";
import withAccordion from "./HigherOrderComponent";

const FAQ = () => {
  return (
    <div>
      <h3>Frequently Asked Questions</h3>
      <p>This is the answer to the most asked question.</p>
    </div>
  );
};

export default withAccordion(FAQ);
