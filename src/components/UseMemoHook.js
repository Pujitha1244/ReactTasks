import React, { useState, useMemo } from "react";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);

  const computedValue = useMemo(() => {
    console.log("Computing...");
    return count * 10; // Expensive calculation
  }, [count]); // Recalculates only when 'count' changes

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemoHook;
