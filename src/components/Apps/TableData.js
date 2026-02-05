import React, { useState } from "react";

const TableData = () => {
  const [data, setData] = useState([
    { id: 1, name: "poojitha", gender: "female" },
    { id: 2, name: "John", gender: "male" },
    { id: 3, name: "sita", gender: "female" },
  ]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <tr>
              <td>{person.name}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
