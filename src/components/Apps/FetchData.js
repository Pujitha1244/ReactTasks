// import React, { useEffect, useState } from "react";

// const FetchData = () => {
//   const [data, setData] = useState();
//   useEffect(() => {
//     const fetchingUsers = async () => {
//       let apiData = await fetch("https://jsonplaceholder.typicode.com/users");
//       let jsonData = await apiData.json();
//       setData(jsonData);
//     };
//     fetchingUsers();
//   }, []);
//   console.log(data);
//   return (
//     <div>
//       {data?.map((data) => (
//         <p>{data.name}</p>
//       ))}
//     </div>
//   );
// };

// export default FetchData;

import React, { useEffect, useState } from "react";
import UseDebounce from "../CustomeHooks/UseDebounce";

const FetchData = () => {
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // const fetchingUsers = async () => {
    //   let apiData = await fetch("https://jsonplaceholder.typicode.com/users");
    //   let jsonData = await apiData.json();
    //   setData(jsonData);
    // };
    // fetchingUsers();

   fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);

  const debouncedSearchText = UseDebounce(searchText, 500);

  const filteredData = data?.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredData?.length > 0
        ? filteredData?.map((data) => <p>{data.name}</p>)
        : "no Data"}
    </div>
  );
};

export default FetchData;
