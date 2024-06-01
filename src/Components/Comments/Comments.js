import React from "react";
import CommentsCard from "./CommentsCard";

function Comments(props) {
  // ***** variables ***** //
  const comments = require("../../data/comments.json");
  const hId = props.hatId;

  // ***** methods ***** //
  const hatFilter = comments.filter((filt) => filt.hatId === hId);

  const hatMap = hatFilter.map((map) => (
    <CommentsCard key={map.id} comments={map} />
  ))

  // ***** functions ***** //
  const noComments = () => {
    return <h3>No comments yet</h3>;
  };

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
      <section className="comment-reader">
        {hId ? hatMap : noComments() }
      </section>
    </div>
  );
}

export default Comments;
