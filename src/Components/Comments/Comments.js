import React from "react";
import CommentsCard from "./CommentsCard";

function Comments() {
  const comments = require("../../data/comments.json");

  return (
    <div className="comments container">
      <section className="comment-header">
        <div className="row">
          <div className="col-3 input-title">
            <p>Leave a comment:</p>
          </div>
          <div className="col-9 input-comment">
            <input
              type="text"
              className="comment-input"
              placeholder="Talk about this hat..."
            />
          </div>
        </div>
      </section>
      <hr span="separator"/>
      <section className="comment-reader">
        {comments.map((comment) => (
          <CommentsCard key={comment.id} comment={comment} />
        ))}
      </section>
    </div>
  );
}

export default Comments;
