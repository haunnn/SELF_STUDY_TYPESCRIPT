import React from "react";

interface TodoListProps {
  items: { id: number; text: string }[];
  onDeleteTodo: ( id: number ) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => {onDeleteTodo(todo.id)}}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
