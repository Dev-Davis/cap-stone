import React from "react";
import CommentsCard from "./CommentsCard";

function Comments() {
  const comments = require("../../data/comments.json");

  return (
    <div className="comments container-fluid">
      <section className="comment-body">
        <div className="row">
          <div className="input-title">
            <section className="leave-comment-section">
              <p className="comment-title col">Comment?</p>
            </section>
          </div>
        </div>
        <div className="row">
          <section className="comment-section">
            <input
              type="text"
              className="comment-input col"
              placeholder="Talk about this hat..."
            />
          </section>
        </div>
      </section>
      <hr span="separator" />
            {/* <button className="col-2 btn btn-light">Submit</button> */}
      <section className="comment-reader">
        {comments.map((comment) => (
          <CommentsCard key={comment.id} comment={comment} />
        ))}
      </section>
    </div>
  );
}

export default Comments;
