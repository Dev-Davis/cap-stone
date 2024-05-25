import React from "react";
import CommentsCard from "./CommentsCard";

function Comments() {
  const comments = require("../../data/comments.json")

  return (
    <div className="comments container">
      <div className="row">
        <div className="col-4">
          <p>Leave a comment:</p>
          </div>
        <div className="col-8">
          <input type="text" className="comment-input" placeholder="Talk about this hat..." />
        </div>
          {comments.map((comment) => (
            <CommentsCard key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
}

export default Comments;
