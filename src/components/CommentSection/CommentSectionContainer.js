// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [commentData] = useState(props.comments)

  return (
    <div>
      <CommentInput />
      {commentData.map((v, k)=> (
        <Comment comment={v} key = {k} />
      ))}
    </div>
  );
};

export default CommentSection;
