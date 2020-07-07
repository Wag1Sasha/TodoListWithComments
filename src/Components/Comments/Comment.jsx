import React from "react";
import "./Comment.css";

export const Comment = ({ text, updateState, id }) => {
  return (
    <div className="comment">
      <p>{text}</p>
      <span
        className="material-icons"
        onClick={() => updateState("DELETE", { id })}
      >
        delete
      </span>
    </div>
  );
};
