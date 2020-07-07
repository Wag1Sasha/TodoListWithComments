import React from "react";
import {Comment} from "./Comment";
import "./Comment.css";

export const CommentList = ({ comments,updateState }) => {

  return (
    <div className="list">
      {comments.map((comment) => (
        <Comment key={comment.id} text={comment.text} id={comment.id} updateState={updateState}/>
      ))}
    </div>
  );
}

