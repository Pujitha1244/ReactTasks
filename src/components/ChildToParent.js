// import React, { useState } from "react";

// const Child = ({ sendDataToParent }) => {
//   return (
//     <button onClick={() => sendDataToParent("Hello from Child!")}>
//       Send Data
//     </button>
//   );
// };

// const Parent = () => {
//   const [message, setMessage] = useState("");

//   const handleDataFromChild = (data) => {
//     setMessage(data);
//   };

//   return (
//     <div>
//       <h2>Message from Child In parent: {message}</h2>
//       <Child sendDataToParent={handleDataFromChild} />
//     </div>
//   );
// };

// export default Parent;

import React, { useState } from "react";

const Child = ({ handleChange }) => {
  return (
    <button onClick={() => handleChange("sent Data to parent")}>Click</button>
  );
};

const Parent = () => {
  const [message, setMessage] = useState("");

  const handleChange = (data) => {
    setMessage(data);
  };
  return (
    <div>
      <h1>Message from Child to parent : {message}</h1>
      <Child handleChange={handleChange} />
    </div>
  );
};

export default Parent;
