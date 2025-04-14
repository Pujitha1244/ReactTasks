import React, { useState } from "react";

const CheckboxComponent = () => {
  const [selectedOrder, setSelectedOrder] = useState([]); // Store selected checkboxes
  const [disabled, setDisabled] = useState(false); // Track disabled state
  const [enabledIndexes, setEnabledIndexes] = useState([]); // Track enabled indexes

  const checkboxes = [
    "Checkbox 1",
    "Checkbox 2",
    "Checkbox 3",
    "Checkbox 4",
    "Checkbox 5",
    "Checkbox 6",
    "Checkbox 7",
    "Checkbox 8",
  ];

  // Handle checkbox selection
  const handleCheckboxChange = (index) => {
    if (!selectedOrder.includes(index)) {
      setSelectedOrder([...selectedOrder, index]);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    setDisabled(true); // Disable all checkboxes
    setEnabledIndexes([]); // Reset enabled indexes

    // Enable checkboxes in order of selection
    selectedOrder.forEach((index, i) => {
      setTimeout(() => {
        setEnabledIndexes((prev) => [...prev, index]);
      }, (i + 1) * 500); // 500ms delay
    });
  };

  return (
    <div>
      <h3>Select Checkboxes</h3>
      {checkboxes.map((label, index) => (
        <div key={index}>
          <input
            type="checkbox"
            disabled={disabled && !enabledIndexes.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />{" "}
          {label}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CheckboxComponent;
