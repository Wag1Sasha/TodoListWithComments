import React from "react";
import "./todo.css";

export const Todo = ({ title, id, completed, updateState, selected }) => {
  const Compl = (
    <span
      className="material-icons"
      onClick={() => updateState("MARK", { id })}
    >
      {completed ? "check_box" : "check_box_outline_blank"}
    </span>
  );
  return (
    <div className={selected ? "todo selected" : "todo"}>
      {Compl}
      <p
        className="titleTodo"
        onClick={(event) => updateState("SELECT", { id, event })}
      >
        {title}
      </p>
      <span
        className="material-icons"
        onClick={() => updateState("DELETE", { id })}
      >
        delete
      </span>
    </div>
  );
};
