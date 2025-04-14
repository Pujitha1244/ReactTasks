import React, { useState } from "react";

const Forms = () => {
  const inputFields = [
    { id: 1, type: "text", value: "FirstName" },
    { id: 2, type: "text", value: "LastName" },
  ];

  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", formData.FirstName);
    console.log("Last Name:", formData.LastName);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputFields.map((field) => (
        <div key={field.id}>
          <input
            type={field.type}
            name={field.value}
            value={formData[field.value]}
            onChange={handleChange}
            placeholder={field.value}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
