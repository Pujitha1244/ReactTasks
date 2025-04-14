import React, { useCallback, useState } from "react";

const ChildComponent = ({ handleClick }) => {
  console.log("child");
  return <button onClick={handleClick}>childButton</button>;
};

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  //   const handleClick = () => {
  //     console.log("Button Clicked");
  //     alert("Clicked !");
  //   };

  const handleClick = useCallback(() => {
    alert("Clicked !");
  }, []); // need to add dependency
  return (
    <div>
      <p>Count useCallback: {count}</p>

      <button onClick={() => setCount(count + 1)}>callbackCount</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default UseCallbackHook;

// import React, { useState } from "react";

// const ChildComponent = ({ handleClick }) => {
//   console.log("Child Re-rendered");
//   return <button onClick={handleClick}>Click Me</button>;
// };

// const UseCallbackHook = () => {
//   const [count, setCount] = useState(0);

//   const handleClick = () => {
//     console.log("Button Clicked");
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent handleClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// };

// export default UseCallbackHook;
