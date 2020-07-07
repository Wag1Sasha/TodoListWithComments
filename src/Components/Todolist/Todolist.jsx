import React from "react";
import { Todo } from "./Todo";
import "./todolist.css";

export const TodoList = ({ todos, updateState, currentID }) => {
  const createTodoComponent = (todo, selected) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        updateState={updateState}
        selected={selected}
      />
    );
  };

  return (
    <div className="list">
      {todos.map((todo) =>
        todo.id === currentID
          ? createTodoComponent(todo, true)
          : createTodoComponent(todo, false)
      )}
    </div>
  );
};
