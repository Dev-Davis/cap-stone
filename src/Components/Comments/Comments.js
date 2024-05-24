import React from "react";
import CommentsCard from "./CommentsCard";

function Comments() {
  const comments = require("../../data/comments.json")
  return (
    <div className="comments container">
      <div className="row">
        <div className="col-12">
          <input type="text" className="comment-input" placeholder="Talk about this hat..." />
          {comments.map((comment) => (
            <CommentsCard key={comment.id} comment={comment}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comments;
