import React, { useState } from "react";

const ColorApp = () => {
  const [colors, setColors] = useState({
    red: true,
    yellow: true,
    green: true,
  });

  const handleChange = (color) => {
    setColors((prev) => ({
      ...prev,
      [color]: !prev[color],
    }));
  };

  return (
    <div>
      <h1 style={{ backgroundColor: colors.red ? "red" : "white" }}>Red</h1>
      <button onClick={() => handleChange("red")}>Red</button>
      <h1 style={{ backgroundColor: colors.yellow ? "yellow" : "white" }}>
        Yellow
      </h1>
      <button onClick={() => handleChange("yellow")}>Yellow</button>
      <h1 style={{ backgroundColor: colors.green ? "green" : "white" }}>
        Green
      </h1>
      <button onClick={() => handleChange("green")}>Green</button>
    </div>
  );
};

export default ColorApp;

