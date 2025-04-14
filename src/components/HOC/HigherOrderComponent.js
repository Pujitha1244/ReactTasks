// import React, { useState } from "react";

// const withAccordion = (WrappedComponent) => {
//   return (props) => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleAccordion = () => {
//       setIsOpen(!isOpen);
//     };

//     return (
//       <div>
//         <button onClick={toggleAccordion}>
//           {isOpen ? "Collapse" : "Expand"}
//         </button>
//         {isOpen && <WrappedComponent {...props} />}
//       </div>
//     );
//   };
// };

// export default withAccordion;

import React, { useState } from "react";

const higherOrderComponent = (WrappedComponent) => {
  return (props) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <div>
        <button onClick={handleClick}>{open ? "collapse" : "Expand"}</button>
        {open && <WrappedComponent {...props} />}
      </div>
    );
  };
};

export default higherOrderComponent;
