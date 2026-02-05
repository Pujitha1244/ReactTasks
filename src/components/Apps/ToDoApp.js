// import React, { useState, useRef } from "react";

// // Very basic single-file To‑Do app suitable for an interview/demo.
// // - Add todos
// // - Toggle complete
// // - Delete todos
// // - Simple, accessible, and easy to explain verbally

// export default function ToDoApp() {
//   const [todos, setTodos] = useState([]); // { id, text, done }
//   const [text, setText] = useState("");

//   function addTodo(e) {
//     e?.preventDefault();
//     setTodos((prev) => [...prev, { id: Date.now().toString(), text: text }]);
//     setText("");
//   }

//   function deleteTodo(id) {
//     setTodos((prev) => prev.filter((t) => t.id !== id));
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6">
//         <h1 className="text-2xl font-semibold mb-4">Simple To‑Do</h1>

//         <form onSubmit={addTodo} className="flex gap-2 mb-4">
//           <input
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             placeholder="Add a task (press Enter)"
//             className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring"
//             aria-label="New todo"
//           />
//           <button
//             type="submit"
//             className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//           >
//             Add
//           </button>
//         </form>

//         <ul className="space-y-2">
//           {todos.length === 0 && (
//             <li className="text-sm text-gray-500">
//               No tasks yet — add one above.
//             </li>
//           )}

//           {todos.map((t) => (
//             <li
//               key={t.id}
//               className="flex items-center justify-between p-2 border rounded-lg"
//             >
//               {t.text}

//               <button
//                 onClick={() => deleteTodo(t.id)}
//                 aria-label={`Delete ${t.text}`}
//                 className="text-sm text-red-600 hover:underline"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>

//         <div className="mt-4 text-sm text-gray-600">
//           <strong>{todos.length}</strong> task{todos.length !== 1 ? "s" : ""}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodoList((prev) => [
      ...prev,
      { id: Date.now().toString(), text: todoText },
    ]);
    setTodoText('')
  };

  const handleDelete = (id) => {
    const filteredData = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredData);
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button>Add</button>
      </form>
      <p>Todo List</p>
      {todoList.map((todo) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <li>{todo.text}</li>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ToDoApp;
