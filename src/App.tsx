import React, { useState } from "react";

import TodoListItem from "./TodoListItem";

const initialTodos: Todo[] = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </>
  );
};

export default App;
