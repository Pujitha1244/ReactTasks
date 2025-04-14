// import React, { useReducer, useState } from "react";

// const initialState = { count: 0 };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increase":
//       return { count: state.count + 1 };
//     case "decrease":
//       return { count: state.count - 1 };
//     default:
//       return;
//   }
// };

// const UseReducerHook = () => {
//   //   const [count, setCount] = useState(0);

//   const [state, dispatch] = useReducer(reducer, initialState);

//   const incrementCount = () => {
//     // setCount((prevCount) => prevCount + 1);
//     dispatch({ type: "increase" });
//   };
//   const decrementCount = () => {
//     // setCount((prevCount) => prevCount - 1);
//     dispatch({ type: "decrease" });
//   };
//   return (
//     <div>
//       <h2>UseReducer Hook</h2>
//       <h2>Count: {state.count}</h2>
//       <button onClick={incrementCount}>Increase</button>
//       <button onClick={decrementCount}>Decrease</button>
//     </div>
//   );
// };

// export default UseReducerHook;

// import React, { useReducer } from "react";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrease":
//       return { count: state.count - 1 };
//     default:
//       return;
//   }
// };

// const UseReducerHook = () => {
//   const initialState = { count: 0 };
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const incrementCount = () => {
//     dispatch({ type: "increment" });
//   };

//   const decrementCount = () => {
//     dispatch({ type: "decrease" });
//   };
//   return (
//     <div>
//       <h2>count: {state.count}</h2>
//       <button onClick={incrementCount}>+</button>
//       <button onClick={decrementCount}>-</button>
//     </div>
//   );
// };

// export default UseReducerHook;

import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return;
  }
};

const UseReducerHook = () => {
  let initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({ type: "inc" });
  };

  const decrement = () => {
    dispatch({ type: "dec" });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default UseReducerHook;
