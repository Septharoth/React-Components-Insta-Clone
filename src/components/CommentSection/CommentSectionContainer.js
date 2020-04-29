// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments)

  const submitComment = (e) => {
    e.preventDefault()
    return setComments([...comments, {username: "Student", text: "Hello from lambda school"}])
  }

  return (
    <div>
      {comments.map((v, k) => (
        <Comment key={k} comment={v} />
      ))}
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
