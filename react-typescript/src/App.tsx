import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [cnt, setCnt] = useState(1);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: cnt, text: text }]);
    setCnt((prev) => prev + 1);
    console.log(text);
  };

  const todoDeleteHandler = (id: number) => {
    setTodos((prev) => prev.filter((items) => items.id !== id));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
