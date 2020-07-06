import React from "react";
import {Todo} from "./Todo";
import "./todolist.css";

export const TodoList = ({todos, updateState}) => {

  return (
    <div className="list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            updateState={updateState}
          />
        ))}
    </div>
  );
}
