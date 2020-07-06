import React from "react";
import {Comment} from "./Comment";
import "./Comment.css";

export const CommentList = ({ comments }) => {

  return (
    <div className="list">
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} />
      ))}
    </div>
  );
}

