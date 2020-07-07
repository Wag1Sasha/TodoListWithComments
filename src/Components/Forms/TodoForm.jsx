import React from "react";
import uniqid from "uniqid";
import "./form.css";

export const TodoForm = ({ updateState }) =>{
  const [value, setValue] = React.useState("");

  const createTodo = (title) => {
    return {
      title: title,
      id: uniqid.time(),
      completed: false,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length < 3) return;
    updateState("ADD", {todo:createTodo(value)});
    setValue("");
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="form">
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={onChange}
          value={value}
          placeholder="Create Todo"
        ></input>
      </form>
    </div>
  );
}

