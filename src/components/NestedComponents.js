import React from "react";

const Button = ({ label }) => {
  <button>{label}</button>;
};

const NestedComponents = () => {
  return (
    <div>
      <Button label="Nested Button" />
    </div>
  );
};

export default NestedComponents;
