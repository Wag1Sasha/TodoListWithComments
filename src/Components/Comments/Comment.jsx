import React from "react";
import "./Comment.css";

export const Comment = ({ text }) =>{
  return (
    <div className="comment">
      <p>{text}</p>
    </div>
  );
}
